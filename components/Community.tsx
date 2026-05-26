import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { communities } from "@/data/site";
import { SectionHeader } from "@/components/SectionHeader";

export function Community() {
  return (
    <section id="community" className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="glass-panel overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <SectionHeader
            eyebrow="Community Layer"
            title="加入社区，获取后续更新"
            description="想接收资源更新可以进频道，想提问交流可以进群组，国内用户也可以通过 QQ 群快速联系。"
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {communities.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="group flex h-full flex-col rounded-[1.5rem] border border-white/70 bg-white/52 p-5 transition hover:-translate-y-0.5 hover:bg-white/75">
                  <Icon className="size-5 text-signal-blue" />
                  <h3 className="mt-5 font-semibold text-base-ink">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-base-soft">{item.description}</p>
                  <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-signal-blue">
                    {item.meta}
                    {item.href ? <ArrowUpRight className="size-4" /> : null}
                  </p>
                </div>
              );

              return item.href ? (
                <Link key={item.title} href={item.href} target="_blank" rel="noopener noreferrer">
                  {content}
                </Link>
              ) : (
                <div key={item.title}>{content}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
