"use client";

import { useEffect, useState } from "react";

const TIME_ZONE = "Asia/Shanghai";
const DAY_MS = 24 * 60 * 60 * 1000;

type CalendarDate = {
  year: number;
  month: number;
  day: number;
};

type ProgressItem = {
  label: string;
  current: number;
  elapsed: number;
  total: number;
};

function getCalendarDate(date: Date): CalendarDate {
  const parts = new Intl.DateTimeFormat("zh-CN", {
    timeZone: TIME_ZONE,
    year: "numeric",
    month: "numeric",
    day: "numeric"
  }).formatToParts(date);

  const values = Object.fromEntries(
    parts
      .filter((part) => part.type === "year" || part.type === "month" || part.type === "day")
      .map((part) => [part.type, Number(part.value)])
  );

  return {
    year: values.year,
    month: values.month,
    day: values.day
  };
}

function getTimeProgress(date: Date): ProgressItem[] {
  const { year, month, day } = getCalendarDate(date);
  const calendarDate = Date.UTC(year, month - 1, day);
  const dayOfWeek = new Date(calendarDate).getUTCDay() || 7;
  const dayOfYear = Math.floor((calendarDate - Date.UTC(year, 0, 1)) / DAY_MS) + 1;
  const daysInMonth = new Date(Date.UTC(year, month, 0)).getUTCDate();
  const daysInYear = new Date(Date.UTC(year, 1, 29)).getUTCMonth() === 1 ? 366 : 365;

  return [
    {
      label: "本周",
      current: dayOfWeek,
      elapsed: dayOfWeek - 1,
      total: 7
    },
    {
      label: "本月",
      current: day,
      elapsed: day - 1,
      total: daysInMonth
    },
    {
      label: "今年",
      current: dayOfYear,
      elapsed: dayOfYear - 1,
      total: daysInYear
    }
  ];
}

function ProgressSquares({ current, total }: { current: number; total: number }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(0.55rem,1fr))] gap-1">
      {Array.from({ length: total }, (_, index) => (
        <span
          key={index}
          className={`progress-square aspect-square rounded-[0.18rem] ${
            index + 1 === current
              ? "progress-square-today"
              : index < current - 1
                ? "progress-square-active"
                : "progress-square-idle"
          }`}
        />
      ))}
    </div>
  );
}

export function TimeProgress() {
  const [timeProgress, setTimeProgress] = useState<ProgressItem[] | null>(null);

  useEffect(() => {
    const refresh = () => setTimeProgress(getTimeProgress(new Date()));

    refresh();
    const timer = window.setInterval(refresh, 60_000);

    return () => window.clearInterval(timer);
  }, []);

  if (!timeProgress) {
    return <p className="text-xs text-base-soft">正在按北京时间校对…</p>;
  }

  return (
    <div className="grid gap-4">
      {timeProgress.map((item) => (
        <div key={item.label}>
          <div className="mb-2 flex items-center justify-between gap-4">
            <span className="text-sm font-semibold text-base-ink">{item.label}</span>
            <span className="text-xs text-base-soft">
              已过 {item.elapsed} / {item.total} 天
            </span>
          </div>
          <ProgressSquares current={item.current} total={item.total} />
        </div>
      ))}
    </div>
  );
}
