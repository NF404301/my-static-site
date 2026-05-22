import Link from "next/link";
import { ArrowUpRight, Clock3, Flame, PlayCircle } from "lucide-react";
import type { VideoItem } from "@/lib/aggregators";
import { SectionHeader } from "@/components/SectionHeader";

export function LatestVideos({ videos }: { videos: VideoItem[] }) {
  const [featured, ...rest] = videos;

  return (
    <section id="updates" className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div className="lg:sticky lg:top-24">
          <SectionHeader
            eyebrow="Latest Signal"
            title="先看最新、最值得点开的内容"
            description="首页把近期视频放到更靠前的位置，减少寻找成本；如果 B 站接口受限，会自动展示精选内容。"
          />
          <Link
            href="https://space.bilibili.com/384557462"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-base-line bg-white/56 px-4 py-2 text-sm font-semibold text-base-ink shadow-inset transition hover:-translate-y-0.5 hover:bg-white"
          >
            进入完整视频列表
            <ArrowUpRight className="size-4 text-signal-blue" />
          </Link>
        </div>

        <div className="grid gap-4">
          {featured ? (
            <Link
              href={featured.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel group overflow-hidden rounded-[2rem] transition hover:-translate-y-1"
            >
              <div className="grid gap-5 p-5 sm:grid-cols-[auto_1fr_auto] sm:p-6">
                <div className="grid size-14 place-items-center rounded-2xl bg-base-ink text-white shadow-glass">
                  <Flame className="size-6" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-signal-blue/10 px-3 py-1 text-xs font-semibold text-signal-blue">
                      推荐观看
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-base-soft">
                      <Clock3 className="size-3" />
                      {featured.publishedAt}
                    </span>
                    {featured.views ? <span className="text-xs text-base-soft">{featured.views}</span> : null}
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-base-ink">
                    {featured.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-base-soft">{featured.description}</p>
                </div>
                <ArrowUpRight className="hidden size-5 self-center text-base-soft transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal-blue sm:block" />
              </div>
            </Link>
          ) : null}

          <div className="grid gap-3 md:grid-cols-2">
            {rest.map((video, index) => (
              <Link
                href={video.href}
                target="_blank"
                rel="noopener noreferrer"
                key={`${video.href}-${index}`}
                className="group rounded-[1.35rem] border border-base-line bg-white/48 p-4 shadow-inset backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/76"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-signal-blue">
                    <PlayCircle className="size-4" />
                    {video.tag}
                  </span>
                  <ArrowUpRight className="size-4 text-base-soft transition group-hover:text-signal-blue" />
                </div>
                <h3 className="mt-3 line-clamp-2 min-h-[3.5rem] text-base font-semibold leading-7 text-base-ink">
                  {video.title}
                </h3>
                <p className="mt-2 text-xs text-base-soft">
                  {video.publishedAt}
                  {video.views ? ` · ${video.views}` : ""}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
