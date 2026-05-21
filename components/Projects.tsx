import Link from "next/link";
import { ArrowUpRight, CalendarDays, GitFork, Image as ImageIcon, Star } from "lucide-react";
import { principles, projectZones } from "@/data/site";
import type { RepoItem } from "@/lib/aggregators";
import { SectionHeader } from "@/components/SectionHeader";

function getTimeProgress() {
  const now = new Date();
  const dayOfWeek = now.getDay() || 7;
  const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const dayOfYear = Math.floor((now.getTime() - startOfYear.getTime()) / 86400000) + 1;
  const daysInYear = new Date(now.getFullYear(), 1, 29).getMonth() === 1 ? 366 : 365;

  return [
    {
      label: "本周",
      current: dayOfWeek,
      total: 7,
      detail: `已过 ${dayOfWeek} / 7 天`
    },
    {
      label: "本月",
      current: now.getDate(),
      total: daysInMonth,
      detail: `已过 ${now.getDate()} / ${daysInMonth} 天`
    },
    {
      label: "今年",
      current: dayOfYear,
      total: daysInYear,
      detail: `已过 ${dayOfYear} / ${daysInYear} 天`
    }
  ];
}

function ProgressSquares({ current, total }: { current: number; total: number }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(0.55rem,1fr))] gap-1">
      {Array.from({ length: total }, (_, index) => (
        <span
          key={index}
          className={`progress-square aspect-square rounded-[0.18rem] ${
            index + 1 === current
              ? "progress-square-today"
              : index < current
                ? "progress-square-active"
                : "progress-square-idle"
          }`}
        />
      ))}
    </div>
  );
}

export function Projects({ repos }: { repos: RepoItem[] }) {
  const timeProgress = getTimeProgress();

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
            <div className="rounded-3xl border border-white/70 bg-white/48 p-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-signal-blue">
                <CalendarDays className="size-4" />
                Time Progress
              </div>
              <p className="mt-2 font-semibold text-base-ink">时间进度</p>
              <p className="mt-1 text-sm leading-6 text-base-soft">看看本周、本月和今年已经走到哪里。</p>
              <div className="mt-5 grid gap-4">
                {timeProgress.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/70 bg-white/45 p-3">
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <span className="text-sm font-semibold text-base-ink">{item.label}</span>
                      <span className="text-xs text-base-soft">{item.detail}</span>
                    </div>
                    <ProgressSquares current={item.current} total={item.total} />
                  </div>
                ))}
              </div>
            </div>
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
