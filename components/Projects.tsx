import { ArrowUpRight, Star } from "lucide-react";
import type { RepoItem } from "@/lib/aggregators";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/data/site";
export function Projects({ repos }: { repos: RepoItem[] }) {
  return <section id="projects" className="lab-projects" aria-labelledby="projects-title">
    <div className="section-topline"><SectionHeader eyebrow="OPEN SOURCE" title="正在生长的项目" id="projects-title" /><a href={site.github} target="_blank" rel="noopener noreferrer" className="text-link">GitHub <ArrowUpRight /></a></div>
    {repos.map((repo, index) => <a href={repo.href} target="_blank" rel="noopener noreferrer" key={repo.href} className="resource-row">
      <span className="resource-row-number">{String(index + 1).padStart(2, "0")}</span>
      <div><h3>{repo.title}</h3><p>{repo.description}</p><p>{repo.language} · 更新 {repo.updatedAt}</p></div>
      <span className="resource-row-meta"><span className="inline-flex items-center gap-1"><Star aria-label="Star 数" />{repo.stars}</span><ArrowUpRight /></span>
    </a>)}
  </section>;
}
