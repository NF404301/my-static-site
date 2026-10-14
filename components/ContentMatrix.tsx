import Link from "next/link";
import { ArrowUpRight, BookOpen, FolderOpen, FlaskConical, Smartphone } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { contentSections, resourceCount } from "@/data/sections";
const icons = { apple: Smartphone, tutorials: BookOpen, pan: FolderOpen, lab: FlaskConical };
export function ContentMatrix() {
  return <section id="explore" className="site-container explore-section" aria-labelledby="explore-title">
    <div className="section-topline"><SectionHeader eyebrow="01 / EXPLORE" title="你的下一次发现，从这里开始" description="找一个工具，学一种方法，或者只是随意逛逛。" id="explore-title" /><span className="section-note">{String(contentSections.length).padStart(2, "0")} 个内容方向</span></div>
    <div className="topic-grid">{contentSections.map((topic, index) => {
      const Icon = icons[topic.id];
      return <Link key={topic.id} href={topic.href} className="topic-link">
        <div className="topic-top"><span className="topic-icon-wrap"><Icon className="topic-icon" aria-hidden="true" /></span><span className="topic-number">0{index + 1}</span></div>
        <h3>{topic.title}<ArrowUpRight aria-hidden="true" /></h3><p>{topic.summary}</p>
        <div className="topic-tags">{topic.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <div className="topic-bottom"><span>{resourceCount(topic)} 个精选入口</span><span>进入探索</span></div>
      </Link>;
    })}</div>
  </section>;
}
