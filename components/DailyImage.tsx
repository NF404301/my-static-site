"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
export function DailyImage() {
  const [opened, setOpened] = useState(false);
  const [failed, setFailed] = useState(false);
  return <details className="daily-details" onToggle={(event) => { if (event.currentTarget.open) setOpened(true); }}>
    <summary>每日一图 · 给眼睛放个假</summary>
    {opened && <div>
      {!failed && <img src="https://api.dujin.org/bing/1920.php" alt="Bing 每日风景" width={640} height={360} loading="lazy" onError={() => setFailed(true)} />}
      {failed && <p className="section-description">图片暂时无法加载，可以前往 Bing 查看。</p>}
      <a href="https://www.bing.com" target="_blank" rel="noopener noreferrer" className="text-link">前往 Bing <ArrowUpRight /></a>
    </div>}
  </details>;
}
