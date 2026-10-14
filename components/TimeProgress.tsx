"use client";
import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
const DAY_MS = 86_400_000;
function getProgress(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Shanghai", year: "numeric", month: "numeric", day: "numeric" }).formatToParts(date);
  const value = (type: string) => Number(parts.find((part) => part.type === type)?.value);
  const year = value("year"), month = value("month"), day = value("day");
  const today = Date.UTC(year, month - 1, day);
  return { year, month, day, dayOfYear: Math.floor((today - Date.UTC(year, 0, 1)) / DAY_MS) + 1, daysInYear: (Date.UTC(year + 1, 0, 1) - Date.UTC(year, 0, 1)) / DAY_MS, dayOfWeek: new Date(today).getUTCDay() || 7, daysInMonth: new Date(Date.UTC(year, month, 0)).getUTCDate() };
}
export function TimeProgress() {
  const [progress, setProgress] = useState<ReturnType<typeof getProgress> | null>(null);
  useEffect(() => { const refresh = () => setProgress(getProgress(new Date())); refresh(); const timer = window.setInterval(refresh, 60_000); return () => window.clearInterval(timer); }, []);
  if (!progress) return <div className="calendar-loading">正在校对北京时间…</div>;
  const { year, dayOfYear, daysInYear, dayOfWeek, day, daysInMonth } = progress;
  const elapsed = dayOfYear - 1;
  return <>
    <div className="calendar-heading"><span>MAKE EACH DAY COUNT</span><ArrowUpRight aria-hidden="true" /></div>
    <div className="calendar-year"><strong>{year}<span aria-hidden="true"> /</span></strong><span>今天，是第 {dayOfYear} 天</span></div>
    <div className="year-grid" role="img" aria-label={`${year} 年已过 ${elapsed} 天，共 ${daysInYear} 天，今天是第 ${dayOfYear} 天`}>
      {Array.from({ length: daysInYear }, (_, index) => <span aria-hidden="true" key={index} className={`year-dot${index < elapsed ? " elapsed" : index === elapsed ? " today" : ""}`} />)}
    </div>
    <div className="calendar-foot"><span>每一小格，都是一天。</span><strong>{Math.floor(elapsed / daysInYear * 100)}% 已走过</strong></div>
    <details className="calendar-details"><summary>本周与本月 <ChevronDown aria-hidden="true" /></summary><div className="calendar-periods">
      {[{ label: "本周", elapsed: dayOfWeek - 1, total: 7 }, { label: "本月", elapsed: day - 1, total: daysInMonth }].map((item) => <div className="calendar-period" key={item.label}><span>{item.label}</span><progress aria-label={`${item.label}已过天数`} value={item.elapsed} max={item.total} /><span>{item.elapsed} / {item.total} 天</span></div>)}
      <p className="calendar-foot">按北京时间计算已完整度过的天数</p>
    </div></details>
  </>;
}
