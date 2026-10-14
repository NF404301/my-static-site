"use client";

import Link from "next/link";
import { useRef, useState, type KeyboardEvent } from "react";
import { ArrowRight, ArrowUpRight, Video } from "lucide-react";
import { milestones } from "@/data/milestones";
import { SectionHeader } from "@/components/SectionHeader";

export function Milestones() {
  const [activeIndex, setActiveIndex] = useState(milestones.length - 1);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index + 1) % milestones.length;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (index - 1 + milestones.length) % milestones.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = milestones.length - 1;
    else return;
    event.preventDefault();
    setActiveIndex(next);
    tabs.current[next]?.focus();
  }

  return (
    <section id="milestones" className="milestones-section" aria-labelledby="milestones-title">
      <div className="site-container">
        <div className="section-topline">
          <SectionHeader eyebrow="03 / BILIBILI JOURNEY" title="每一个阶段，都算数。" description="在 B 站，记录创作、被看见和有人同行的时刻。" id="milestones-title" />
          <span className="journey-badge"><Video aria-hidden="true" />B 站成长里程碑 · {milestones.length} 个节点</span>
        </div>
        <div className="journey-layout">
          <div className="journey-tabs" role="tablist" aria-label="B 站成长里程碑" aria-orientation="vertical">
            {milestones.map((milestone, index) => (
              <button key={milestone.id} ref={(node) => { tabs.current[index] = node; }} type="button"
                role="tab" id={`stage-${milestone.id}`} aria-controls={`chapter-${milestone.id}`}
                aria-selected={activeIndex === index} tabIndex={activeIndex === index ? 0 : -1}
                onClick={() => setActiveIndex(index)} onKeyDown={(event) => navigate(event, index)} className="journey-tab">
                <span className="journey-marker">{String(index + 1).padStart(2, "0")}</span>
                <span className="journey-tab-copy"><time dateTime={milestone.date}>{milestone.date.replaceAll("-", ".")} · {milestone.stage}</time><strong>{milestone.title}</strong></span>
                <ArrowRight aria-hidden="true" />
              </button>
            ))}
          </div>
          <div className="journey-panels">
            {milestones.map((milestone, index) => (
              <div key={milestone.id} role="tabpanel" id={`chapter-${milestone.id}`} aria-labelledby={`stage-${milestone.id}`}
                tabIndex={0} hidden={activeIndex !== index} className="journey-panel">
                <div className="chapter-top"><span>MILESTONE {String(index + 1).padStart(2, "0")}</span><time dateTime={milestone.date}>{milestone.date.replaceAll("-", ".")}</time></div>
                <h3>{milestone.subtitle}</h3>
                <p className="chapter-description">{milestone.description}</p>
                <dl className="milestone-metrics">{milestone.metrics.map((metric) => <div key={metric.label}><dt>{metric.label}</dt><dd>{metric.value}</dd></div>)}</dl>
                <p className="milestone-note">{milestone.note}</p>
                <div className="chapter-bottom"><div className="chapter-tags">{milestone.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  {milestone.link.href.startsWith("/") ? <Link href={milestone.link.href} className="text-link">{milestone.link.label}<ArrowUpRight aria-hidden="true" /></Link> : <a href={milestone.link.href} className="text-link" target="_blank" rel="noopener noreferrer">{milestone.link.label}<ArrowUpRight aria-hidden="true" /></a>}
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="journey-footnote"><span className="status-dot" />保持好奇，慢慢积累。下一章，继续写。</p>
      </div>
    </section>
  );
}
