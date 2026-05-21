import Link from "next/link";
import { ArrowUpRight, GitFork, Image as ImageIcon, Newspaper, Star } from "lucide-react";
import { principles, projectZones } from "@/data/site";
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

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-panel rounded-[2rem] p-6">
          <h3 className="text-xl font-semibold text-base-ink">每日信息</h3>
          <div className="mt-6 grid gap-4">
            <Link
              href="https://www.bing.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-3xl border border-white/70 bg-white/48 transition hover:bg-white/75"
            >
              <div className="aspect-[16/9] overflow-hidden bg-signal-blue/10">
                <img
                  src="https://api.dujin.org/bing/1920.php"
                  alt="Bing 每日一图"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-signal-blue">
                  <ImageIcon className="size-4" />
                  Daily Image
                </div>
                <p className="mt-2 font-semibold text-base-ink">每日一图</p>
                <p className="mt-1 text-sm leading-6 text-base-soft">自动展示 Bing 每日壁纸，作为首页的轻量视觉更新。</p>
              </div>
            </Link>
            <Link
              href="https://api.vvhan.com/api/60s"
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-3xl border border-white/70 bg-white/48 transition hover:bg-white/75"
            >
              <div className="bg-signal-blue/10 p-3">
                <img
                  src="https://api.vvhan.com/api/60s"
                  alt="每天 60 秒新闻"
                  className="mx-auto max-h-96 w-full rounded-2xl object-contain"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-signal-blue">
                  <Newspaper className="size-4" />
                  Daily News
                </div>
                <p className="mt-2 font-semibold text-base-ink">每天 60 秒新闻</p>
                <p className="mt-1 text-sm leading-6 text-base-soft">每日早报图片，适合快速浏览当天重点消息。</p>
                <span className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-base-ink">
                  打开早报 <ArrowUpRight className="size-3 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
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
