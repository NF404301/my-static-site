import { ArrowUpRight, ChevronDown } from "lucide-react";
import { site } from "@/data/site";
export function Community() {
  return <section id="community" className="site-container community-section" aria-labelledby="community-title">
    <div><h2 id="community-title">有趣的发现，一起分享。</h2><p>订阅更新，或者来聊聊你最近在折腾什么。</p></div>
    <div className="community-links">
      <a href={site.telegramChannel} target="_blank" rel="noopener noreferrer" className="text-link">订阅频道 <ArrowUpRight /></a>
      <a href={site.telegramGroup} target="_blank" rel="noopener noreferrer" className="text-link">加入群聊 <ArrowUpRight /></a>
      <details className="qq-details"><summary className="text-link">QQ 群 <ChevronDown /></summary><div className="qq-panel"><p>QQ 群号</p><strong>346728469</strong><p>在 QQ 中搜索群号加入。</p></div></details>
    </div>
  </section>;
}
