import { Clock3 } from "lucide-react";
import { labNotes, recentUpdates } from "@/data/site";
import { SectionHeader } from "@/components/SectionHeader";

export function UpdatesAndLab() {
  return (
    <section id="lab" className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-base-line bg-white/32 p-5 shadow-inset backdrop-blur sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <SectionHeader
            eyebrow="Build Log"
            title="最近更新和正在整理的内容"
            description="这里记录网站新增入口、教程整理和后续计划。来访者可以快速判断哪些内容刚更新，哪些资源还在持续补充。"
          />
          <div className="grid gap-4 md:grid-cols-2">
            <Timeline title="最近更新" items={recentUpdates} tone="blue" />
            <Timeline title="最近折腾" items={labNotes} tone="green" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Timeline({
  title,
  items,
  tone
}: {
  title: string;
  items: typeof recentUpdates;
  tone: "blue" | "green";
}) {
  const dotClass = tone === "green" ? "bg-signal-green" : "bg-signal-blue";

  return (
    <div className="rounded-[1.5rem] border border-white/70 bg-white/55 p-5 shadow-inset">
      <h3 className="text-lg font-semibold text-base-ink">{title}</h3>
      <div className="mt-5 grid gap-5">
        {items.map((item) => (
          <article key={item.title} className="relative border-l border-base-line pl-5">
            <span className={`absolute -left-[7px] top-1 grid size-3 place-items-center rounded-full ${dotClass} ring-4 ring-white/80`} />
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-signal-blue/10 px-2.5 py-1 text-xs font-semibold text-signal-blue">
                {item.tag}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-base-soft">
                <Clock3 className="size-3" />
                {item.date}
              </span>
            </div>
            <h4 className="mt-3 font-semibold text-base-ink">{item.title}</h4>
            <p className="mt-2 text-sm leading-6 text-base-soft">{item.summary}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
