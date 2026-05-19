import Link from "next/link";
import { ArrowUpRight, GitFork, Star } from "lucide-react";
import { domainMap, principles, projectZones } from "@/data/site";
import type { RepoItem } from "@/lib/aggregators";
import { SectionHeader } from "@/components/SectionHeader";

export function Projects({ repos }: { repos: RepoItem[] }) {
  return (
    <section id="projects" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Project System"
        title="主站是门户，子域是功能舱。"
        description="未来的扩展不挤在首页里，而是通过四个域名层级承载：主站聚合，Apple、Pan、Lab 分别深挖。"
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {projectZones.map((project) => {
          const Icon = project.icon;
          return (
            <Link
              href={project.href}
              key={project.title}
              className="glass-panel group rounded-[1.75rem] p-6 transition hover:-translate-y-1"
            >
              <div className="grid size-12 place-items-center rounded-2xl bg-base-ink text-white shadow-glass">
                <Icon className="size-5" />
              </div>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-signal-blue">
                {project.status}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-base-ink">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-base-soft">{project.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-base-ink">
                查看入口 <ArrowUpRight className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>
          );
        })}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-panel rounded-[2rem] p-6">
          <h3 className="text-xl font-semibold text-base-ink">域名结构</h3>
          <div className="mt-6 grid gap-4">
            {domainMap.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.host} className="flex gap-4 rounded-3xl border border-white/70 bg-white/48 p-4">
                  <div className="grid size-10 shrink-0 place-items-center rounded-2xl bg-signal-blue/10 text-signal-blue">
                    <Icon className="size-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-base-ink">{item.host}</p>
                    <p className="mt-1 text-sm leading-6 text-base-soft">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="glass-panel rounded-[2rem] p-6">
          <h3 className="text-xl font-semibold text-base-ink">GitHub 项目</h3>
          <div className="mt-6 grid gap-4">
            {repos.map((repo) => (
              <Link
                href={repo.href}
                target="_blank"
                rel="noopener noreferrer"
                key={repo.href}
                className="group rounded-3xl border border-white/70 bg-white/48 p-4 transition hover:bg-white/75"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-semibold text-base-ink">{repo.title}</h4>
                    <p className="mt-1 text-sm leading-6 text-base-soft">{repo.description}</p>
                  </div>
                  <ArrowUpRight className="size-4 shrink-0 text-base-soft transition group-hover:text-signal-blue" />
                </div>
                <div className="mt-4 flex flex-wrap gap-3 text-xs text-base-soft">
                  <span className="inline-flex items-center gap-1">
                    <GitFork className="size-3" />
                    {repo.language}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Star className="size-3" />
                    {repo.stars}
                  </span>
                  <span>更新 {repo.updatedAt}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {principles.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="rounded-[1.5rem] border border-base-line bg-white/35 p-5">
              <Icon className="size-5 text-signal-blue" />
              <h3 className="mt-4 font-semibold text-base-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-base-soft">{item.body}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
