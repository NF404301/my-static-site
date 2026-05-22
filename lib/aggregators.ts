import crypto from "node:crypto";
import { fallbackVideos, site } from "@/data/site";

export type VideoItem = {
  title: string;
  description: string;
  href: string;
  publishedAt: string;
  tag: string;
  views?: string;
};

export type RepoItem = {
  title: string;
  description: string;
  href: string;
  language: string;
  stars: number;
  updatedAt: string;
};

const FETCH_TIMEOUT_MS = 3500;

function withTimeout() {
  return AbortSignal.timeout(FETCH_TIMEOUT_MS);
}

const mixinKeyEncTab = [
  46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31, 58, 3, 45, 35, 27, 43, 5, 49,
  33, 9, 42, 19, 29, 28, 14, 39, 12, 38, 41, 13, 37, 48, 7, 16, 24, 55, 40, 61,
  26, 17, 0, 1, 60, 51, 30, 4, 22, 25, 54, 21, 56, 59, 6, 63, 57, 62, 11, 36,
  20, 34, 44, 52
];

function getMixinKey(original: string) {
  return mixinKeyEncTab
    .map((index) => original[index])
    .join("")
    .slice(0, 32);
}

function encodeQuery(params: Record<string, string | number | boolean>) {
  return Object.keys(params)
    .sort()
    .map((key) => {
      const value = String(params[key]).replace(/[!'()*]/g, "");
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    })
    .join("&");
}

function formatDate(seconds?: number) {
  if (!seconds) return "最新";
  return new Intl.DateTimeFormat("zh-CN", {
    month: "2-digit",
    day: "2-digit"
  }).format(new Date(seconds * 1000));
}

function formatCount(count?: number) {
  if (!count) return undefined;
  if (count >= 10000) return `${(count / 10000).toFixed(count >= 100000 ? 0 : 1)} 万播放`;
  return `${count} 播放`;
}

export async function getBilibiliVideos(): Promise<VideoItem[]> {
  try {
    const headers = {
      "user-agent": "Mozilla/5.0",
      referer: `${site.bilibiliSpace}/video`
    };
    const navResponse = await fetch("https://api.bilibili.com/x/web-interface/nav", {
      headers,
      signal: withTimeout(),
      next: { revalidate: 3600 }
    });
    const nav = await navResponse.json();
    const imgUrl = nav?.data?.wbi_img?.img_url as string | undefined;
    const subUrl = nav?.data?.wbi_img?.sub_url as string | undefined;

    if (!imgUrl || !subUrl) return fallbackVideos;

    const imgKey = imgUrl.match(/\/([^/]+)\.png$/)?.[1];
    const subKey = subUrl.match(/\/([^/]+)\.png$/)?.[1];
    if (!imgKey || !subKey) return fallbackVideos;

    const mixinKey = getMixinKey(imgKey + subKey);
    const params = {
      keyword: "",
      mid: 384557462,
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
    const wRid = crypto.createHash("md5").update(query + mixinKey).digest("hex");
    const response = await fetch(
      `https://api.bilibili.com/x/space/wbi/arc/search?${query}&w_rid=${wRid}`,
      { headers, signal: withTimeout(), next: { revalidate: 1800 } }
    );
    const payload = await response.json();
    const list = payload?.data?.list?.vlist;

    if (!Array.isArray(list) || list.length === 0) return fallbackVideos;

    return list.slice(0, 6).map((item) => ({
      title: item.title,
      description: item.description || "来自 Bilibili 的最新公开内容。",
      href: `https://www.bilibili.com/video/${item.bvid}/`,
      publishedAt: formatDate(item.created),
      tag: "Bilibili",
      views: formatCount(item.play)
    }));
  } catch {
    return fallbackVideos;
  }
}

export async function getGithubRepos(): Promise<RepoItem[]> {
  try {
    const response = await fetch(
      "https://api.github.com/users/NF404301/repos?sort=updated&per_page=6",
      {
        headers: {
          accept: "application/vnd.github+json",
          "user-agent": "gy-digital-base"
        },
        signal: withTimeout(),
        next: { revalidate: 3600 }
      }
    );
    const repos = await response.json();

    if (!Array.isArray(repos)) return fallbackRepos;

    return repos.slice(0, 6).map((repo) => ({
      title: repo.name,
      description: repo.description || "持续整理中的公开项目。",
      href: repo.html_url,
      language: repo.language || "Repo",
      stars: repo.stargazers_count || 0,
      updatedAt: new Intl.DateTimeFormat("zh-CN", {
        month: "2-digit",
        day: "2-digit"
      }).format(new Date(repo.updated_at))
    }));
  } catch {
    return fallbackRepos;
  }
}

export const fallbackRepos: RepoItem[] = [
  {
    title: "my-static-site",
    description: "Digital Base 的前身，正在迁移为 Next.js 创作者门户。",
    href: "https://github.com/NF404301/my-static-site",
    language: "Next.js",
    stars: 0,
    updatedAt: "本地"
  },
  {
    title: "awesome-appletv",
    description: "Apple TV 应用和资源索引。",
    href: "https://github.com/bitxeno/awesome-appletv",
    language: "Apple",
    stars: 0,
    updatedAt: "精选"
  }
];
