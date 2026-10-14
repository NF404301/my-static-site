import { site } from "@/data/site";

export type Milestone = {
  id: string;
  date: string;
  stage: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  metrics: { value: string; label: string }[];
  note: string;
  link: { label: string; href: string };
};

// Owner-provided Bilibili achievements. Metrics describe each dated milestone,
// not current account totals. Do not replace them with live aggregation data.
export const milestones: Milestone[] = [
  {
    id: "video-1k", date: "2022-06-15", stage: "稿件成就", title: "稿件达到 1 千播放",
    subtitle: "被看见的创作，留下一个刻度。",
    description: "2022 年 6 月 15 日，一篇稿件达到了 1 千次播放。把这个小小的成就，记在创作旅程里。",
    tags: ["Bilibili", "稿件播放成就"],
    metrics: [{ value: "1,000", label: "稿件播放量" }],
    note: "记录该节点的稿件播放成就，不代表账号累计播放量。",
    link: { label: "去 B 站看看我的创作", href: site.bilibiliSpace }
  },
  {
    id: "followers-10", date: "2022-11-09", stage: "关注里程碑", title: "有了 10 位粉丝",
    subtitle: "10 位关注，让分享多了一份回应。",
    description: "2022 年 11 月 9 日，B 站账号拥有了 10 位粉丝。创作之外，也开始留下与关注者相遇的记录。",
    tags: ["Bilibili", "关注与陪伴"],
    metrics: [{ value: "10", label: "位粉丝" }],
    note: "粉丝数量记录于 2022 年 11 月 9 日。",
    link: { label: "访问我的 B 站主页", href: site.bilibiliSpace }
  },
  {
    id: "followers-1k", date: "2023-07-13", stage: "关注里程碑", title: "遇见 1 千位粉丝",
    subtitle: "从 10 到 1,000，更多人同行。",
    description: "2023 年 7 月 13 日，B 站粉丝数达到 1 千。一个关于分享与陪伴的阶段，就这样有了新的数字。",
    tags: ["Bilibili", "千粉纪念"],
    metrics: [{ value: "1,000", label: "位粉丝" }],
    note: "粉丝数量记录于 2023 年 7 月 13 日。",
    link: { label: "访问我的 B 站主页", href: site.bilibiliSpace }
  },
  {
    id: "video-500k", date: "2025-08-02", stage: "稿件成就", title: "稿件达到 50 万播放",
    subtitle: "一次分享，被更多人看见。",
    description: "2025 年 8 月 2 日，一篇稿件达到了 50 万次播放。这个播放成就，成为创作历程中值得留存的一页。",
    tags: ["Bilibili", "稿件播放成就"],
    metrics: [{ value: "50 万", label: "稿件播放量" }],
    note: "记录该节点的稿件播放成就，不代表账号累计播放量。",
    link: { label: "去 B 站看看我的创作", href: site.bilibiliSpace }
  },
  {
    id: "six-years", date: "2026-02-04", stage: "创作周年", title: "成为 UP 主 6 周年",
    subtitle: "六年，把热爱留在 134 个作品里。",
    description: "2026 年 2 月 4 日，成为 UP 主满 6 周年。累计发布 134 个作品，收获 1,239 位粉丝。用这一页记录走过的路，也给下一次创作留一个起点。",
    tags: ["Bilibili", "六周年纪念", "继续创作"],
    metrics: [{ value: "6", label: "年创作时光" }, { value: "134", label: "个累计作品" }, { value: "1,239", label: "位粉丝" }],
    note: "作品与粉丝数据截至 2026 年 2 月 4 日，非实时统计。",
    link: { label: "去 B 站看看我的创作", href: site.bilibiliSpace }
  }
];
