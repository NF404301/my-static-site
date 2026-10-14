"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, ChevronRight, Search, X } from "lucide-react";
import type { ResourceGroup } from "@/data/sections";
import type { TutorialCard } from "@/data/tutorials";

export type ResourceCard = TutorialCard;
export type { ResourceGroup } from "@/data/sections";

export function ResourceDirectory({ groups }: { groups: ResourceGroup[] }) {
  const sections = useRef<Record<string, HTMLDetailsElement | null>>({});
  const searchInput = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const keyword = query.trim().toLocaleLowerCase();
  const filteredGroups = groups.map((group) => ({
    ...group,
    cards: group.cards.filter((card) => `${card.title} ${card.description} ${card.label}`.toLocaleLowerCase().includes(keyword))
  })).filter((group) => group.cards.length > 0);
  const resultCount = filteredGroups.reduce((sum, group) => sum + group.cards.length, 0);

  useEffect(() => {
    const openHash = () => {
      let id: string;
      try { id = decodeURIComponent(window.location.hash.slice(1)); } catch { return; }
      const section = sections.current[id];
      if (section) { section.open = true; section.scrollIntoView({ block: "start" }); }
    };
    openHash();
    window.addEventListener("hashchange", openHash);
    return () => window.removeEventListener("hashchange", openHash);
  }, []);

  function clearSearch() {
    setQuery("");
    searchInput.current?.focus();
  }

  return <div className="resource-directory">
    <div className="resource-toolbar">
      <div className="resource-search" role="search" aria-label="本专区资源搜索">
        <Search aria-hidden="true" />
        <label htmlFor="resource-search" className="sr-only">搜索本专区</label>
        <input ref={searchInput} id="resource-search" type="search" placeholder="搜索本专区的工具、教程或资料…" value={query} onChange={(event) => setQuery(event.target.value)} />
        {query && <button type="button" aria-label="清空搜索" onClick={clearSearch}><X aria-hidden="true" /></button>}
      </div>
      <p role="status">{keyword ? `找到 ${resultCount} 个结果` : `${groups.length} 个分类 · ${resultCount} 个精选入口`}</p>
    </div>
    <div className="resource-layout">
      <aside className="resource-sidebar"><p>本页目录 / CONTENTS</p><nav aria-label="本页分类">
        {filteredGroups.map((group) => <a key={group.id} href={`#${group.id}`} onClick={() => { const section = sections.current[group.id]; if (section) section.open = true; }}>
          {group.title}<span>{String(group.cards.length).padStart(2, "0")}</span>
        </a>)}
      </nav></aside>
      <div>
        {filteredGroups.length === 0 && <div className="search-empty"><Search aria-hidden="true" /><h2>还没有找到匹配的内容</h2><p>试试其他关键词，或回到完整目录继续探索。</p><button type="button" className="button button-secondary" onClick={clearSearch}>查看全部资源</button></div>}
        {filteredGroups.map((group, groupIndex) => <details id={group.id} key={`${group.id}-${keyword}`} ref={(element) => { sections.current[group.id] = element; }} className="resource-group" open={!!keyword || groupIndex === 0}>
          <summary><h2>{group.title}<span>{group.cards.length} 项</span></h2><ChevronDown aria-hidden="true" /></summary>
          {group.cards.map((card, index) => {
            const external = /^https?:\/\//.test(card.href);
            return <a key={card.href} href={card.href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="resource-row">
              <span className="resource-row-number">{String(index + 1).padStart(2, "0")}</span>
              <div><h3>{card.title}</h3><p>{card.description}</p></div>
              <span className="resource-row-meta"><span>{card.label}</span>{external ? <ArrowUpRight aria-label="在新标签页打开" /> : <ChevronRight aria-hidden="true" />}</span>
            </a>;
          })}
        </details>)}
      </div>
    </div>
  </div>;
}
