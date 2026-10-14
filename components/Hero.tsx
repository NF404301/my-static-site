import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Sprout } from "lucide-react";
import { site } from "@/data/site";

export function Hero() {
  return <section className="site-container hero" aria-labelledby="hero-title">
    <div className="hero-main">
      <p className="eyebrow">A PERSONAL DIGITAL GARDEN</p>
      <div className="hero-intro"><span className="status-dot" />你好，我是 GY念六</div>
      <h1 id="hero-title">保持好奇，<br />让热爱<span>慢慢生长。</span></h1>
      <p className="hero-copy">探索 Apple、AI 与数字生活。把亲手试过的工具、<br className="desktop-break" />认真整理的教程，和一路成长的故事，留在这里。</p>
      <div className="hero-actions"><Link href="#explore" className="button button-primary">探索我的数字花园 <ArrowDown aria-hidden="true" /></Link><Link href="#milestones" className="button button-secondary">我的成长轨迹 <ArrowUpRight aria-hidden="true" /></Link></div>
      <div className="hero-topics"><span>关注的方向</span><p>Apple & iOS<i />实用教程<i />AI 与自动化</p></div>
    </div>
    <aside className="creator-card" aria-label="创作者名片">
      <div className="creator-card-top"><span>THE CREATOR’S NOTE</span><Sprout aria-hidden="true" /></div>
      <div className="creator-portrait"><Image src="/avatar.jpg" alt="GY念六的头像" width={148} height={148} priority /><span className="portrait-caption">HELLO, WORLD.</span></div>
      <h2>折腾有趣的，<br />分享有用的。</h2>
      <p>这里收藏我的发现，<br />也记录每一个认真走过的阶段。</p>
      <div className="creator-card-bottom"><span>GY念六<span className="creator-signature">Digital Base</span></span><a href={site.bilibiliSpace} aria-label="前往 GY念六的 B 站主页" target="_blank" rel="noopener noreferrer"><ArrowUpRight aria-hidden="true" /></a></div>
    </aside>
  </section>;
}
