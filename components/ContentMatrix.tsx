import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { contentMatrix } from "@/data/site";
import { SectionHeader } from "@/components/SectionHeader";

export function ContentMatrix() {
  return (
    <section id="matrix" className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
        <SectionHeader
          eyebrow="Content Matrix"
          title="按内容职责，而不是按链接堆叠"
          description="四个平台各自承担不同任务：视频负责深度教程，图文负责轻量记录，频道负责实时更新，GitHub 负责项目和代码。"
        />
        <div className="rounded-[1.75rem] border border-base-line bg-white/38 p-5 text-sm leading-7 text-base-soft shadow-inset backdrop-blur">
          主站负责总览和分流，长期内容会逐步沉淀到 Apple、Pan、Lab 等专题空间，保持首页清爽。
        </div>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        {contentMatrix.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel group grid gap-5 rounded-[1.75rem] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:grid-cols-[auto_1fr_auto] sm:p-6"
            >
              <div
                className={`grid size-12 place-items-center rounded-2xl bg-gradient-to-br ${item.accent} text-white shadow-glass`}
              >
                <Icon className="size-5" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-sm font-semibold text-signal-blue">{item.label}</p>
                  <span className="text-xs text-base-soft">0{index + 1}</span>
                </div>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-base-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-base-soft">{item.description}</p>
              </div>
              <span className="flex items-center gap-2 self-center text-sm font-semibold text-base-ink">
                打开
                <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
