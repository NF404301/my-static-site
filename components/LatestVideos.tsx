import Link from "next/link";
import { ArrowUpRight, PlayCircle } from "lucide-react";
import type { VideoItem } from "@/lib/aggregators";
import { SectionHeader } from "@/components/SectionHeader";

export function LatestVideos({ videos }: { videos: VideoItem[] }) {
  return (
    <section id="updates" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeader
          eyebrow="Latest Signal"
          title="高播放内容优先展示。"
          description="优先展示 B站公开列表里播放量更高的内容；接口受限时保留精选教程作为降级内容。"
        />
        <div className="grid gap-4">
          {videos.map((video, index) => (
            <Link
              href={video.href}
              target="_blank"
              rel="noopener noreferrer"
              key={`${video.href}-${index}`}
              className="glass-panel group grid gap-4 rounded-[1.5rem] p-5 transition hover:-translate-y-0.5 hover:bg-white/70 sm:grid-cols-[auto_1fr_auto]"
            >
              <div className="grid size-12 place-items-center rounded-2xl bg-signal-blue/10 text-signal-blue">
                <PlayCircle className="size-5" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-white/70 px-2.5 py-1 text-xs font-semibold text-signal-blue">
                    {video.tag}
                  </span>
                  <span className="text-xs text-base-soft">{video.publishedAt}</span>
                  {video.views ? <span className="text-xs text-base-soft">{video.views}</span> : null}
                </div>
                <h3 className="mt-2 text-lg font-semibold text-base-ink">{video.title}</h3>
                <p className="mt-1 text-sm leading-6 text-base-soft">{video.description}</p>
              </div>
              <ArrowUpRight className="hidden size-5 self-center text-base-soft transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal-blue sm:block" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
