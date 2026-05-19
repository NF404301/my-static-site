import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { communities } from "@/data/site";
import { SectionHeader } from "@/components/SectionHeader";

export function Community() {
  return (
    <section id="community" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="glass-panel overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeader
            eyebrow="Community Layer"
            title="社区不是联系方式，是内容的回声层。"
            description="频道负责广播，群组负责讨论，QQ 群照顾国内用户。主站只保留清晰入口，不把所有即时信息塞进页面。"
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {communities.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="group h-full rounded-[1.5rem] border border-white/70 bg-white/52 p-5 transition hover:-translate-y-0.5 hover:bg-white/75">
                  <Icon className="size-5 text-signal-blue" />
                  <h3 className="mt-5 font-semibold text-base-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-base-soft">{item.description}</p>
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
