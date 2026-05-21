import {
  Boxes,
  Cloud,
  Code2,
  Compass,
  Github,
  Globe2,
  Layers3,
  MessageCircle,
  PlayCircle,
  Radio,
  Rocket,
  Server,
  Smartphone,
  Sparkles,
  TestTube2
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type MatrixItem = {
  title: string;
  label: string;
  description: string;
  href: string;
  accent: string;
  icon: LucideIcon;
};

export type ProjectItem = {
  title: string;
  description: string;
  href?: string;
  status?: string;
  action?: string;
  icon: LucideIcon;
};

export type UpdateItem = {
  title: string;
  summary: string;
  date: string;
  tag: string;
};

export type CommunityItem = {
  title: string;
  description: string;
  href?: string;
  meta: string;
  icon: LucideIcon;
};

export const site = {
  name: "GY念六 Digital Base",
  shortName: "GY念六",
  domain: "000919.xyz",
  description:
    "一个面向 Apple、iOS 折腾、AI 工具、VPS 自动化和数字社区的个人数字内容生态中枢。",
  bilibiliSpace: "https://space.bilibili.com/384557462",
  xiaohongshu: "https://xhslink.com/m/5Ga5TY5xwTc",
  telegramChannel: "https://t.me/GYWebWord",
  telegramGroup: "https://t.me/+fT1YX18RVq9hYzZl",
  github: "https://github.com/NF404301",
  alist: "http://13.70.6.48:5244/",
  blog: "https://wongtq.blogspot.com/"
};

export const navigation = [
  { title: "生态", href: "#matrix" },
  { title: "更新", href: "#updates" },
  { title: "折腾", href: "#lab" },
  { title: "社区", href: "#community" },
  { title: "项目", href: "#projects" }
];

export const contentMatrix: MatrixItem[] = [
  {
    title: "Bilibili",
    label: "视频教程",
    description: "iOS、Apple、工具体验、AI 玩法与实操教程的主阵地。",
    href: site.bilibiliSpace,
    accent: "from-signal-blue to-signal-cyan",
    icon: PlayCircle
  },
  {
    title: "小红书",
    label: "轻内容",
    description: "短内容、图文笔记、工具灵感与日常观察的轻量发布区。",
    href: site.xiaohongshu,
    accent: "from-rose-500 to-orange-400",
    icon: Sparkles
  },
  {
    title: "Telegram",
    label: "频道与群组",
    description: "资源更新、频道广播、群组讨论和实时补充信息。",
    href: site.telegramChannel,
    accent: "from-sky-500 to-blue-600",
    icon: Radio
  },
  {
    title: "GitHub",
    label: "项目与实验",
    description: "网站、自动化脚本、部署实验和长期迭代的开源入口。",
    href: site.github,
    accent: "from-slate-700 to-slate-950",
    icon: Github
  }
];

export const projectZones: ProjectItem[] = [
  {
    title: "Apple 专区",
    description: "Apple TV、TestFlight、iOS 资源、TrollStore 与常用工具索引。",
    href: "/apple",
    status: "精选网站",
    action: "进入专区",
    icon: Smartphone
  },
  {
    title: "Alist 网盘",
    description: "长期沉淀的资料库入口，面向文档、工具包和资源站聚合。",
    href: site.alist,
    status: "Private Drive",
    icon: Cloud
  },
  {
    title: "Blogspot Blog",
    description: "Personal blog archive and longer-form posts hosted on Blogspot.",
    href: site.blog,
    status: "wongtq.blogspot.com",
    icon: Globe2
  }
];

export const recentUpdates: UpdateItem[] = [
  {
    title: "Digital Base 首页重构",
    summary: "从链接页升级为创作者门户，建立内容矩阵、项目区、社区入口和动态聚合位。",
    date: "2026-05-19",
    tag: "Site"
  },
  {
    title: "B站教程入口整理",
    summary: "把 iOS 快捷指令、Apple 账号、Safari 工具、签名双开等内容整理为教程模块。",
    date: "2026-05-15",
    tag: "Bilibili"
  },
  {
    title: "社区入口归档",
    summary: "TG 频道、TG 群、QQ 群、GitHub 与备用频道统一进入社区模块。",
    date: "2026-05-14",
    tag: "Community"
  }
];

export const labNotes: UpdateItem[] = [
  {
    title: "Vercel 多子域结构",
    summary: "主站承载品牌与内容聚合，Apple、Pan、Lab 子域分别承载垂直功能。",
    date: "Roadmap",
    tag: "Deploy"
  },
  {
    title: "B站与 GitHub 自动聚合",
    summary: "服务端拉取公开接口，失败时使用本地精选内容作为降级数据。",
    date: "Active",
    tag: "Automation"
  },
  {
    title: "AI / VPS 工作流沉淀",
    summary: "把临时折腾变成可复用的工具卡、教程卡和实验记录。",
    date: "Next",
    tag: "Lab"
  }
];

export const communities: CommunityItem[] = [
  {
    title: "Telegram 频道",
    description: "资源更新、教程补充、工具发现与长期广播。",
    href: site.telegramChannel,
    meta: "@GYWebWord",
    icon: Radio
  },
  {
    title: "Telegram 群组",
    description: "适合讨论、反馈、互相补充信息和临时公告。",
    href: site.telegramGroup,
    meta: "Group",
    icon: MessageCircle
  },
  {
    title: "QQ 群",
    description: "国内用户交流入口，适合快速沟通和轻量问答。",
    meta: "346728469",
    icon: Compass
  }
];

export const domainMap = [
  {
    host: "000919.xyz",
    title: "主站",
    description: "Digital Base 首页、内容矩阵、社区入口与项目总览。",
    icon: Globe2
  },
  {
    host: "apple.000919.xyz",
    title: "Apple 专区",
    description: "iOS、TrollStore、TestFlight、Apple TV 与资源入口。",
    icon: Smartphone
  },
  {
    host: "pan.000919.xyz",
    title: "Alist 网盘",
    description: "资料、文档、工具包与长期资源沉淀。",
    icon: Server
  },
  {
    host: "lab.000919.xyz",
    title: "AI 实验室",
    description: "AI 工具、自动化、VPS、部署和实验记录。",
    icon: TestTube2
  }
];

export const principles = [
  { title: "内容不是列表", body: "所有入口都服务于一个清晰叙事：我在持续观察、实验、整理和发布数字工具经验。", icon: Layers3 },
  { title: "项目可扩展", body: "Apple、Pan、Lab 作为独立子域成长，主站只做品牌、聚合和导航判断。", icon: Boxes },
  { title: "动态优先", body: "B站视频和 GitHub 项目自动拉取，静态精选作为稳定降级，不让页面空掉。", icon: Rocket },
  { title: "轻量维护", body: "内容数据集中在 data 和 lib，后续接 MDX、CMS、RSS 或数据库都不会推翻首页。", icon: Code2 }
];

export const fallbackVideos = [
  {
    title: "充电时间助手",
    description: "查看充电时长和使用耗电的 iOS 快捷指令。",
    href: "https://www.bilibili.com/video/BV1dR4y1m7qH/",
    publishedAt: "精选",
    tag: "iOS 快捷指令"
  },
  {
    title: "App Store 价格查询",
    description: "查询 App 价格和内购信息的 iOS 快捷指令。",
    href: "https://www.bilibili.com/video/BV1Nu4y1f7g2/",
    publishedAt: "精选",
    tag: "Apple"
  },
  {
    title: "iOS Safari 油猴脚本",
    description: "Safari 浏览器脚本与翻译插件演示。",
    href: "https://www.bilibili.com/video/BV1Ux4y1j7o7/",
    publishedAt: "精选",
    tag: "Safari"
  }
];
