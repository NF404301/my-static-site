import {
  Boxes,
  Cloud,
  Code2,
  Compass,
  Github,
  Globe2,
  GraduationCap,
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
    "一个整理 Apple/iOS 资源、实用教程、AI 工具、VPS 部署和社区入口的个人数字主页。",
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
  { title: "WebWord", href: "#lab" },
  { title: "社区", href: "#community" },
  { title: "项目", href: "#projects" }
];

export const contentMatrix: MatrixItem[] = [
  {
    title: "Bilibili",
    label: "视频教程",
    description: "观看 iOS、Apple、工具体验和 AI 玩法的实操视频教程。",
    href: site.bilibiliSpace,
    accent: "from-signal-blue to-signal-cyan",
    icon: PlayCircle
  },
  {
    title: "小红书",
    label: "轻内容",
    description: "浏览图文笔记、工具灵感和更轻量的日常更新。",
    href: site.xiaohongshu,
    accent: "from-rose-500 to-orange-400",
    icon: Sparkles
  },
  {
    title: "Telegram",
    label: "频道与群组",
    description: "接收资源更新、临时补充信息，也可以进群交流提问。",
    href: site.telegramChannel,
    accent: "from-sky-500 to-blue-600",
    icon: Radio
  },
  {
    title: "GitHub",
    label: "项目与实验",
    description: "查看公开项目、网站源码、自动化脚本和部署实验记录。",
    href: site.github,
    accent: "from-slate-700 to-slate-950",
    icon: Github
  }
];

export const projectZones: ProjectItem[] = [
  {
    title: "Apple 专区",
    description: "查找 Apple TV、TestFlight、iOS 工具、TrollStore 和常用资源入口。",
    href: "/apple",
    status: "精选网站",
    action: "进入专区",
    icon: Smartphone
  },
  {
    title: "教程下载",
    description: "下载 Apple Watch 配对、QQ 空间获取、天翼云盘文档等客户常用教程。",
    href: "/tutorials",
    status: "客户资料",
    action: "查看教程",
    icon: GraduationCap
  },
  {
    title: "Alist 网盘",
    description: "进入资料库，查找文档、工具包和长期保存的资源内容。",
    href: site.alist,
    status: "Private Drive",
    icon: Cloud
  },
  {
    title: "Blogspot Blog",
    description: "阅读更完整的记录、长文和个人博客归档。",
    href: site.blog,
    status: "wongtq.blogspot.com",
    icon: Globe2
  }
];

export const recentUpdates: UpdateItem[] = [
  {
    title: "Digital Base 首页重构",
    summary: "首页已整理为清晰导航，方便访问者快速进入教程、社区、项目和资料专区。",
    date: "2026-05-19",
    tag: "Site"
  },
  {
    title: "B站教程入口整理",
    summary: "已整理 iOS 快捷指令、Apple 账号、Safari 工具、签名双开等常用教程入口。",
    date: "2026-05-15",
    tag: "Bilibili"
  },
  {
    title: "社区入口归档",
    summary: "Telegram 频道、群组、QQ 群和 GitHub 入口已统一展示，方便选择合适方式联系。",
    date: "2026-05-14",
    tag: "Community"
  }
];

export const labNotes: UpdateItem[] = [
  {
    title: "Vercel 多子域结构",
    summary: "后续会把 Apple、网盘和实验内容分到更清晰的专题入口，方便按需查找。",
    date: "Roadmap",
    tag: "Deploy"
  },
  {
    title: "B站与 GitHub 自动聚合",
    summary: "视频和项目内容会尽量自动更新，接口不可用时也会保留精选内容供访问。",
    date: "Active",
    tag: "Automation"
  },
  {
    title: "AI / VPS 工作流沉淀",
    summary: "AI 工具、VPS 部署和自动化玩法会逐步整理成更容易查看的教程和记录。",
    date: "Next",
    tag: "Lab"
  }
];

export const communities: CommunityItem[] = [
  {
    title: "Telegram 频道",
    description: "适合接收资源更新、教程补充、工具发现和长期通知。",
    href: site.telegramChannel,
    meta: "@GYWebWord",
    icon: Radio
  },
  {
    title: "Telegram 群组",
    description: "适合提问、反馈、交流使用经验，也能看到临时补充信息。",
    href: site.telegramGroup,
    meta: "Group",
    icon: MessageCircle
  },
  {
    title: "QQ 群",
    description: "国内用户可通过 QQ 群快速沟通，适合轻量问答和联系。",
    meta: "346728469",
    icon: Compass
  }
];

export const domainMap = [
  {
    host: "000919.xyz",
    title: "主站",
    description: "从首页进入教程、资源、社区和项目入口。",
    icon: Globe2
  },
  {
    host: "apple.000919.xyz",
    title: "Apple 专区",
    description: "查找 iOS、TrollStore、TestFlight、Apple TV 和相关资源。",
    icon: Smartphone
  },
  {
    host: "pan.000919.xyz",
    title: "Alist 网盘",
    description: "下载或查看资料、文档、工具包和长期资源。",
    icon: Server
  },
  {
    host: "lab.000919.xyz",
    title: "AI 实验室",
    description: "了解 AI 工具、自动化、VPS 部署和实验记录。",
    icon: TestTube2
  }
];

export const principles = [
  { title: "入口清晰", body: "教程、资料、社区和项目按用途分区，第一次访问也能快速判断该点哪里。", icon: Layers3 },
  { title: "资料集中", body: "常用资源和客户教程会放到独立入口，方便保存、转发和重复查看。", icon: Boxes },
  { title: "更新靠前", body: "近期视频、资源补充和项目变化会尽量放在显眼位置，减少寻找成本。", icon: Rocket },
  { title: "长期可用", body: "公开接口不可用时仍保留精选内容，尽量保证页面随时有可访问的信息。", icon: Code2 }
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
