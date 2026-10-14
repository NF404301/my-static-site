"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation, site } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    if (menuOpen) document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);
  const links = navigation.map((item) => (
    <Link key={item.href} href={item.href} className="nav-link" aria-current={pathname.replace(/\/$/, "") === item.href.replace(/\/$/, "") ? "page" : undefined} onClick={() => setMenuOpen(false)}>{item.title}</Link>
  ));
  return <>
    <a className="skip-link" href="#main-content">跳转到主要内容</a>
    <header className="site-header">
      <div className="site-container header-inner">
        <Link href="/" className="brand" aria-label={`${site.shortName}，首页`} onClick={() => setMenuOpen(false)}><span className="brand-mark">GY.</span><span className="brand-divider" /><span className="brand-name">念六</span></Link>
        <nav className="desktop-nav" aria-label="主导航">{links}</nav>
        <Link href="/#community" className="text-link header-contact">保持联系 <ArrowUpRight /></Link>
        <button id="menu-toggle" type="button" className="mobile-toggle" aria-label={menuOpen ? "关闭导航" : "打开导航"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </div>
      <nav id="mobile-navigation" className="mobile-nav" data-open={menuOpen} aria-label="移动端导航">{links}<Link href="/#community" className="nav-link" onClick={() => setMenuOpen(false)}>保持联系</Link></nav>
    </header>
  </>;
}

export function Footer() {
  return <footer className="site-footer"><div className="site-container footer-inner">
    <p>© GY念六 <span aria-hidden="true">·</span> 保持好奇，慢慢积累。</p>
    <nav className="footer-links" aria-label="社交平台">
      {[["Bilibili", site.bilibiliSpace], ["小红书", site.xiaohongshu], ["GitHub", site.github], ["Blog", site.blog], ["WebWord", site.webword]].map(([label, href]) => <a href={href} key={label} target="_blank" rel="noopener noreferrer">{label}</a>)}
    </nav>
  </div></footer>;
}
