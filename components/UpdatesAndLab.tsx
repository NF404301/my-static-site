import { Clock3 } from "lucide-react";
import { labNotes, recentUpdates } from "@/data/site";
import { SectionHeader } from "@/components/SectionHeader";

export function UpdatesAndLab() {
  return (
    <section id="lab" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Build Log"
        title="把折腾记录变成长期资产。"
        description="最近更新与最近折腾分层展示：前者面向用户，后者面向未来扩展和项目沉淀。"
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Timeline title="最近更新" items={recentUpdates} />
        <Timeline title="最近折腾" items={labNotes} />
      </div>
    </section>
  );
}

function Timeline({
  title,
  items
}: {
  title: string;
  items: typeof recentUpdates;
}) {
  return (
    <div className="glass-panel rounded-[2rem] p-6">
      <h3 className="text-xl font-semibold text-base-ink">{title}</h3>
      <div className="mt-6 grid gap-5">
        {items.map((item) => (
          <article key={item.title} className="relative border-l border-base-line pl-5">
            <span className="absolute -left-[7px] top-1 grid size-3 place-items-center rounded-full bg-signal-blue ring-4 ring-white/70" />
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
