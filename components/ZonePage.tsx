import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { Footer, Header } from "@/components/Shell";
import { ResourceDirectory, type ResourceCard, type ResourceGroup } from "@/components/ResourceDirectory";

type ZonePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  tags?: string[];
  groups?: ResourceGroup[];
  cards?: ResourceCard[];
  children?: ReactNode;
};
export function ZonePage({ eyebrow, title, description, tags, groups, cards, children }: ZonePageProps) {
  const directory = groups ?? [{ id: "resources", title: "精选资源", cards: cards ?? [] }];
  return <><Header /><main id="main-content" className="site-container">
    <header className="page-heading">
      <nav className="breadcrumbs" aria-label="面包屑导航"><Link href="/">首页</Link><ChevronRight /><span aria-current="page">{title}</span></nav>
      <div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{description}</p>
      {tags && <div className="page-tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>}
    </header>
    <ResourceDirectory groups={directory} />
    {children}
    <div className="page-related"><p>继续探索其他内容。</p><Link href="/#explore" className="text-link">返回全部主题 <ArrowUpRight /></Link></div>
  </main><Footer /></>;
}
