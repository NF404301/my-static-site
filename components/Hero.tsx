import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, Orbit, PlayCircle, Radio, Sparkles } from "lucide-react";
import { site } from "@/data/site";

const heroChannels = [
  ["Bilibili", "教程、工具体验、实操演示", "42%"],
  ["Apple / iOS", "资源索引、折腾记录", "29%"],
  ["AI / VPS", "自动化、部署实验", "18%"],
  ["Community", "TG / QQ 交流入口", "11%"]
];

const quickLinks = [
  { label: "看最新视频", href: "#updates", icon: PlayCircle },
  { label: "进 Telegram", href: site.telegramChannel, icon: Radio, external: true },
  { label: "看 GitHub", href: site.github, icon: Github, external: true }
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-4 pb-12 pt-8 sm:px-6 lg:px-8 lg:pb-20 lg:pt-14">
      <div className="absolute inset-0 -z-10 bg-radial-grid" />
      <div className="absolute right-[8%] top-24 -z-10 h-72 w-72 rounded-full bg-signal-cyan/18 blur-3xl animate-glow" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="animate-fadeUp">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/58 px-4 py-2 text-sm text-base-soft shadow-inset backdrop-blur-xl">
            <Orbit className="size-4 text-signal-blue" />
            Apple / AI / VPS / Community
          </div>

          <h1 className="text-balance max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-base-ink sm:text-6xl lg:text-7xl">
            GY念六的数字基地
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-base-soft">
            把视频教程、Apple/iOS 资源、AI 自动化、VPS 部署和社区入口收束到一个清晰的主站。你可以从这里快速进入最新内容，也可以顺着主题找到更深的专区。
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#updates"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-base-ink px-6 py-3 text-sm font-semibold text-white shadow-glass transition hover:-translate-y-0.5 hover:bg-slate-700"
            >
              查看最新内容
              <ArrowUpRight className="size-4" />
            </Link>
            <Link
              href={site.bilibiliSpace}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/70 bg-white/58 px-6 py-3 text-sm font-semibold text-base-ink shadow-inset backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/80"
            >
              <PlayCircle className="size-4 text-signal-blue" />
              进入 B 站主页
            </Link>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
            {[
              ["4", "内容平台"],
              ["3", "主力专区"],
              ["24h", "社区更新"]
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-white/65 bg-white/45 p-4 shadow-inset backdrop-blur">
                <p className="text-2xl font-semibold tracking-[-0.03em] text-base-ink">{value}</p>
                <p className="mt-1 text-xs font-medium text-base-soft">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel relative overflow-hidden rounded-[2rem] p-5 animate-fadeUp [animation-delay:120ms] sm:p-6">
          <div className="absolute inset-x-8 top-8 h-px hairline" />
          <div className="flex items-start justify-between gap-4">
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
                <p className="text-sm text-base-soft">科技数码观察与工具实验</p>
              </div>
            </div>
            <span className="shrink-0 rounded-full bg-signal-green/12 px-3 py-1 text-xs font-semibold text-emerald-700">
              Online
            </span>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {quickLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="group rounded-2xl border border-white/70 bg-white/50 p-4 shadow-inset transition hover:-translate-y-0.5 hover:bg-white/80"
                >
                  <Icon className="size-5 text-signal-blue" />
                  <span className="mt-3 flex items-center justify-between gap-2 text-sm font-semibold text-base-ink">
                    {item.label}
                    <ArrowUpRight className="size-4 text-base-soft transition group-hover:text-signal-blue" />
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="mt-5 rounded-3xl border border-signal-blue/15 bg-signal-blue/10 p-5">
            <div className="flex items-start gap-3">
              <Sparkles className="mt-1 size-5 text-signal-blue" />
              <div>
                <p className="font-semibold text-base-ink">主站只做清晰入口</p>
                <p className="mt-1 text-sm leading-6 text-base-soft">
                  最新动态放前面，沉淀内容分到专区，社区入口保持轻量，避免首页变成链接堆叠。
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-3">
            {heroChannels.map(([name, desc, value]) => (
              <div
                key={name}
                className="rounded-2xl border border-white/70 bg-white/48 p-4 shadow-inset backdrop-blur-xl"
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
        </div>
      </div>
    </section>
  );
}
