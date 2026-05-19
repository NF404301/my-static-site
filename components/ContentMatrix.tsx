import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { contentMatrix } from "@/data/site";
import { SectionHeader } from "@/components/SectionHeader";

export function ContentMatrix() {
  return (
    <section id="matrix" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Content Matrix"
        title="不是入口集合，而是一套内容发布系统。"
        description="四个外部平台分别承担不同职责：视频承载深度教程，图文承载轻观察，频道承载实时更新，GitHub 承载项目与代码。"
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {contentMatrix.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel group flex min-h-[280px] flex-col justify-between rounded-[1.75rem] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div>
                <div
                  className={`mb-6 grid size-12 place-items-center rounded-2xl bg-gradient-to-br ${item.accent} text-white shadow-glass`}
                >
                  <Icon className="size-5" />
                </div>
                <p className="text-sm font-semibold text-signal-blue">{item.label}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-base-ink">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-base-soft">{item.description}</p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-base-ink">
                打开平台
                <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
