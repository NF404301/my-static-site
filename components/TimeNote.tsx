import { TimeProgress } from "@/components/TimeProgress";

export function TimeNote() {
  return <section className="site-container time-section" aria-labelledby="time-title">
    <div className="time-note"><p className="eyebrow">A NOTE TO SELF</p><h2 id="time-title">不必一下子走很远，<br />但要一直在路上。</h2><p>用时间刻度提醒自己：<br />探索、记录、分享，让普通的一天也有一点收获。</p><span>日有所记，岁有所成。</span></div>
    <aside className="calendar-panel" aria-label="时间进度"><TimeProgress /></aside>
  </section>;
}
