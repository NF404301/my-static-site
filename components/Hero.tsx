import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Orbit, PlayCircle, Radio } from "lucide-react";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
      <div className="absolute inset-0 -z-10 bg-radial-grid" />
      <div className="absolute left-1/2 top-24 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-signal-blue/15 blur-3xl animate-glow" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.06fr_0.94fr]">
        <div className="animate-fadeUp">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/52 px-4 py-2 text-sm text-base-soft shadow-inset backdrop-blur-xl">
            <Orbit className="size-4 text-signal-blue" />
            Digital Hub for Apple, AI, VPS and Communities
          </div>
          <h1 className="text-balance max-w-4xl text-5xl font-semibold tracking-[-0.055em] text-base-ink sm:text-6xl lg:text-7xl">
            一个持续进化的个人数字基地。
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-base-soft">
            这里不是链接导航，而是 GY念六的内容生态中枢：视频教程、工具实验、Apple/iOS 资源、
            AI 自动化、VPS 部署和社区入口在这里形成一张可扩展的数字地图。
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#updates"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-base-ink px-6 py-3 text-sm font-semibold text-white shadow-glass transition hover:-translate-y-0.5 hover:bg-slate-700"
            >
              查看最新动态
              <ArrowUpRight className="size-4" />
            </Link>
            <Link
              href={site.bilibiliSpace}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/70 bg-white/58 px-6 py-3 text-sm font-semibold text-base-ink shadow-inset backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/80"
            >
              <PlayCircle className="size-4 text-signal-blue" />
              进入 B站主页
            </Link>
          </div>
        </div>

        <div className="glass-panel relative overflow-hidden rounded-[2rem] p-6 animate-fadeUp [animation-delay:120ms]">
          <div className="absolute inset-x-8 top-8 h-px hairline" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/avatar.jpg"
                alt="GY念六头像"
                width={72}
                height={72}
                priority
                className="rounded-2xl object-cover shadow-glass"
              />
              <div>
                <p className="text-lg font-semibold text-base-ink">GY念六</p>
                <p className="text-sm text-base-soft">科技数码观望者</p>
              </div>
            </div>
            <span className="rounded-full bg-signal-green/12 px-3 py-1 text-xs font-semibold text-emerald-700">
              Online
            </span>
          </div>

          <div className="mt-8 grid gap-4">
            {[
              ["Bilibili", "教程与工具体验", "42%"],
              ["Apple / iOS", "资源与折腾记录", "29%"],
              ["AI / VPS", "自动化实验", "18%"],
              ["Community", "TG / QQ 讨论", "11%"]
            ].map(([name, desc, value], index) => (
              <div
                key={name}
                className="rounded-3xl border border-white/70 bg-white/50 p-4 shadow-inset backdrop-blur-xl"
                style={{ animationDelay: `${index * 80 + 200}ms` }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-base-ink">{name}</p>
                    <p className="mt-1 text-sm text-base-soft">{desc}</p>
                  </div>
                  <p className="text-sm font-semibold text-signal-blue">{value}</p>
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200/70">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-signal-blue to-signal-cyan"
                    style={{ width: value }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-3xl border border-signal-blue/15 bg-signal-blue/10 p-5">
            <div className="flex items-start gap-3">
              <Radio className="mt-1 size-5 text-signal-blue" />
              <div>
                <p className="font-semibold text-base-ink">频道作为实时广播层</p>
                <p className="mt-1 text-sm leading-6 text-base-soft">
                  主站负责建立品牌感与内容结构，Telegram 承载即时更新，子域承载垂直功能。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
