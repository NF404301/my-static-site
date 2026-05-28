import Link from "next/link";
import { ArrowUpRight, Bookmark, Globe2, Send, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const webwordCards = [
  {
    title: "收藏内容",
    description: "把值得反复查看的网站、工具和资料整理到一个固定入口。",
    icon: Bookmark
  },
  {
    title: "转发分享",
    description: "适合把常用内容快速发给朋友、客户或社区成员。",
    icon: Send
  },
  {
    title: "了解数字世界",
    description: "围绕工具、资源、教程和数字生活内容持续补充。",
    icon: Sparkles
  }
];

export function UpdatesAndLab() {
  return (
    <section id="lab" className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-base-line bg-white/32 p-5 shadow-inset backdrop-blur sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <SectionHeader
            eyebrow="WebWord"
            title="收藏和转发的内容入口"
            description="WebWord 用来集中展示值得收藏、转发和继续阅读的数字内容。来访者可以直接进入站点，浏览工具、资源和教程相关信息。"
          />
          <div className="grid gap-4">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/55 shadow-inset">
              <div className="flex items-center justify-between gap-4 border-b border-base-line/70 px-5 py-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-base-ink">
                  <Globe2 className="size-4 text-signal-blue" />
                  webword.vercel.app
                </div>
                <Link
                  href="https://webword.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-signal-blue"
                >
                  打开网站
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
              <div className="aspect-[16/10] bg-white">
                <iframe
                  src="https://webword.vercel.app/"
                  title="WebWord 网站预览"
                  loading="lazy"
                  className="h-full w-full border-0"
                />
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              {webwordCards.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-[1.35rem] border border-white/70 bg-white/55 p-4 shadow-inset">
                    <Icon className="size-5 text-signal-blue" />
                    <h3 className="mt-4 font-semibold text-base-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-base-soft">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
