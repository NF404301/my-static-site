import crypto from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const cachePath = path.join(rootDir, "data", "bilibili-videos.json");
const mid = 384557462;
const spaceUrl = "https://space.bilibili.com/384557462";
const timeoutMs = 10000;

const mixinKeyEncTab = [
  46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31, 58, 3, 45, 35, 27, 43, 5, 49,
  33, 9, 42, 19, 29, 28, 14, 39, 12, 38, 41, 13, 37, 48, 7, 16, 24, 55, 40, 61,
  26, 17, 0, 1, 60, 51, 30, 4, 22, 25, 54, 21, 56, 59, 6, 63, 57, 62, 11, 36,
  20, 34, 44, 52
];

function getMixinKey(original) {
  return mixinKeyEncTab
    .map((index) => original[index])
    .join("")
    .slice(0, 32);
}

function encodeQuery(params) {
  return Object.keys(params)
    .sort()
    .map((key) => {
      const value = String(params[key]).replace(/[!'()*]/g, "");
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    })
    .join("&");
}

function formatDate(seconds) {
  if (!seconds) return "最新";
  return new Intl.DateTimeFormat("zh-CN", {
    month: "2-digit",
    day: "2-digit"
  }).format(new Date(seconds * 1000));
}

function formatCount(count) {
  if (!count) return undefined;
  if (count >= 10000) return `${(count / 10000).toFixed(count >= 100000 ? 0 : 1)} 万播放`;
  return `${count} 播放`;
}

function mapVideos(list) {
  return list.slice(0, 6).map((item) => ({
    title: item.title,
    description: item.description || "来自 Bilibili 的公开内容。",
    href: `https://www.bilibili.com/video/${item.bvid}/`,
    publishedAt: formatDate(item.created),
    tag: "Bilibili",
    views: formatCount(item.play)
  }));
}

async function fetchJson(url, options = {}) {
  const response = await fetch(url, {
    ...options,
    signal: AbortSignal.timeout(timeoutMs)
  });

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

async function fetchWbiVideos(headers) {
  const nav = await fetchJson("https://api.bilibili.com/x/web-interface/nav", { headers });
  const imgUrl = nav?.data?.wbi_img?.img_url;
  const subUrl = nav?.data?.wbi_img?.sub_url;

  if (!imgUrl || !subUrl) {
    throw new Error("Bilibili nav response did not include WBI image keys.");
  }

  const imgKey = imgUrl.match(/\/([^/]+)\.png$/)?.[1];
  const subKey = subUrl.match(/\/([^/]+)\.png$/)?.[1];

  if (!imgKey || !subKey) {
    throw new Error("Could not parse WBI keys from Bilibili nav response.");
  }

  const params = {
    keyword: "",
    mid,
    order: "click",
    order_avoided: true,
    platform: "web",
    pn: 1,
    ps: 6,
    tid: 0,
    web_location: 1550101,
    wts: Math.floor(Date.now() / 1000)
  };
  const query = encodeQuery(params);
  const wRid = crypto.createHash("md5").update(query + getMixinKey(imgKey + subKey)).digest("hex");
  const payload = await fetchJson(`https://api.bilibili.com/x/space/wbi/arc/search?${query}&w_rid=${wRid}`, {
    headers
  });
  const list = payload?.data?.list?.vlist;

  if (!Array.isArray(list) || list.length === 0) {
    throw new Error("Bilibili video list was empty.");
  }

  return mapVideos(list);
}

async function fetchLegacyVideos(headers) {
  const payload = await fetchJson(
    `https://api.bilibili.com/x/space/arc/search?mid=${mid}&ps=30&tid=0&pn=1&order=click`,
    { headers }
  );
  const list = payload?.data?.list?.vlist;

  if (!Array.isArray(list) || list.length === 0) {
    throw new Error(`Bilibili legacy video list was empty: ${payload?.message || "unknown error"}`);
  }

  return mapVideos(
    list.sort((a, b) => Number(b.play || 0) - Number(a.play || 0))
  );
}

async function main() {
  const headers = {
    "user-agent": "Mozilla/5.0",
    referer: `${spaceUrl}/video`
  };

  let videos;
  let source = "bilibili-wbi";

  try {
    videos = await fetchWbiVideos(headers);
  } catch (error) {
    console.warn(`WBI fetch failed, trying legacy endpoint: ${error instanceof Error ? error.message : error}`);
    videos = await fetchLegacyVideos(headers);
    source = "bilibili-legacy";
  }

  await mkdir(path.dirname(cachePath), { recursive: true });
  await writeFile(
    cachePath,
    `${JSON.stringify(
      {
        updatedAt: new Date().toISOString(),
        source,
        videos
      },
      null,
      2
    )}\n`,
    "utf8"
  );

  console.log(`Updated ${path.relative(rootDir, cachePath)} with ${videos.length} videos from ${source}.`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
