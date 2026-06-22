import Link from "next/link";
import { ArrowUpRight, CalendarDays, GitFork, Image as ImageIcon, Star } from "lucide-react";
import { principles, projectZones } from "@/data/site";
import type { RepoItem } from "@/lib/aggregators";
import { SectionHeader } from "@/components/SectionHeader";
import { TimeProgress } from "@/components/TimeProgress";

export function Projects({ repos }: { repos: RepoItem[] }) {
  return (
    <section id="projects" className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Project System"
        title="常用专区和资料入口"
        description="这里汇总 Apple 专区、教程下载、网盘资料和博客入口。需要长期保存或反复查看的内容，都可以从这里进入。"
      />

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {projectZones.map((project) => {
          const Icon = project.icon;
          const content = (
            <>
              <div className="grid size-12 place-items-center rounded-2xl bg-base-ink text-white shadow-glass">
                <Icon className="size-5" />
              </div>
              {project.status ? (
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-signal-blue">
                  {project.status}
                </p>
              ) : null}
              <h3 className="mt-3 text-xl font-semibold text-base-ink">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-base-soft">{project.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-base-ink">
                {project.action || "查看入口"}
                {project.href ? (
                  <ArrowUpRight className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                ) : null}
              </span>
            </>
          );

          return project.href ? (
            <Link
              href={project.href}
              key={project.title}
              className="glass-panel group rounded-[1.75rem] p-6 transition hover:-translate-y-1"
            >
              {content}
            </Link>
          ) : (
            <div key={project.title} className="glass-panel rounded-[1.75rem] p-6">
              {content}
            </div>
          );
        })}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-base-ink">
            <ImageIcon className="size-4 text-signal-blue" />
            每日信息
          </div>
          <Link
            href="https://www.bing.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-[1.75rem] border border-base-line bg-white/48 shadow-inset backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/76"
          >
            <div className="aspect-[16/9] overflow-hidden bg-signal-blue/10">
              <img
                src="https://api.dujin.org/bing/1920.php"
                alt="Bing 每日一图"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <p className="font-semibold text-base-ink">每日一图</p>
              <p className="mt-1 text-sm leading-6 text-base-soft">每日更新一张壁纸，给访问首页时留一点轻松变化。</p>
            </div>
          </Link>

          <div className="mt-4 rounded-[1.75rem] border border-base-line bg-white/48 p-5 shadow-inset backdrop-blur">
            <div className="flex items-center gap-2 text-sm font-semibold text-base-ink">
              <CalendarDays className="size-4 text-signal-blue" />
              时间进度
            </div>
            <div className="mt-5">
              <TimeProgress />
            </div>
          </div>
        </div>

        <div>
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-base-ink">
            <GitFork className="size-4 text-signal-blue" />
            GitHub 项目
          </div>
          <div className="grid gap-3">
            {repos.map((repo) => (
              <Link
                href={repo.href}
                target="_blank"
                rel="noopener noreferrer"
                key={repo.href}
                className="group rounded-[1.35rem] border border-base-line bg-white/48 p-4 shadow-inset backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/76"
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

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
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
