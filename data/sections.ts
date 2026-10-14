import { site } from "@/data/site";
import { tutorialCards, type TutorialCard } from "@/data/tutorials";

export type ResourceGroup = { id: string; title: string; cards: TutorialCard[] };
export type ContentSection = {
  id: "apple" | "tutorials" | "pan" | "lab";
  title: string;
  href: string;
  eyebrow: string;
  summary: string;
  description: string;
  tags: string[];
  groups: ResourceGroup[];
};

export const contentSections: ContentSection[] = [
  {
    id: "apple", title: "Apple 专区", href: "/apple",
    eyebrow: "01 / APPLE & iOS", summary: "让手边的设备，更顺手一点。",
    description: "从手腕上的 Apple Watch 到客厅里的 Apple TV，收集实用工具，也探索设备的更多可能。",
    tags: ["Apple Watch", "Apple TV", "iOS 工具"],
    groups: [
      { id: "watch", title: "Apple Watch", cards: [tutorialCards[0]] },
      { id: "tv", title: "Apple TV", cards: [
        { title: "Apple TV 应用合集", description: "Apple TV 应用与资源索引。", href: "https://github.com/bitxeno/awesome-appletv", label: "GitHub" },
        { title: "Apple TV 直播 TestFlight", description: "查看测试名额与安装信息。", href: "https://testflight.apple.com/join/2oZuwSHJ", label: "TestFlight" }
      ] },
      { id: "ios", title: "iOS 工具", cards: [
        { title: "Switchr", description: "App Store 国家与地区切换工具。", href: "http://switchr.imagility.io/", label: "实用工具" },
        { title: "URL Scheme 大全", description: "快捷指令与自动化中常用的 iOS URL Scheme 查询资料。", href: "https://www.ydzms.com/archives/58/", label: "参考资料" }
      ] }
    ]
  },
  {
    id: "tutorials", title: "教程与文档", href: "/tutorials",
    eyebrow: "02 / TUTORIALS", summary: "从一个问题，到一次亲手解决。",
    description: "需要时就能找到的操作步骤与配套资料。选择一个分类，查看、下载，或留给下次使用。",
    tags: ["操作教程", "配套文档", "订阅频道"],
    groups: [
      { id: "downloads", title: "教程下载", cards: tutorialCards.filter((card) => card.label === "123 网盘") },
      { id: "documents", title: "资源文档", cards: tutorialCards.filter((card) => ["天翼资源", "金山文档"].includes(card.label)) },
      { id: "subscriptions", title: "频道与订阅", cards: tutorialCards.filter((card) => ["Telegram", "Follow"].includes(card.label)) }
    ]
  },
  {
    id: "pan", title: "资源收藏", href: "/pan",
    eyebrow: "03 / COLLECTION", summary: "有用的资料，下一次也能找到。",
    description: "给值得留存的东西，一个固定的位置。常用网盘、资源订阅和阅读收藏，都在这里。",
    tags: ["网盘资料", "阅读收藏", "每日一图"],
    groups: [
      { id: "drives", title: "网盘与资料", cards: [
        { title: "Alist 网盘", description: "查找资料、文档与工具包。", href: site.alist, label: "Alist" },
        { title: "天翼云盘资源编号 9527", description: "天翼云盘资源总览。", href: "https://bh9527.pages.dev/", label: "天翼资源" },
        { title: "教程与文档", description: "Apple Watch 配对、QQ 空间获取及配套文档。", href: "/tutorials", label: "站内专题" }
      ] },
      { id: "reading", title: "阅读与订阅", cards: [
        { title: "WebWord", description: "浏览值得收藏的网站、工具与数字内容。", href: site.webword, label: "数字收藏" },
        { title: "Blogspot Blog", description: "长文、使用记录与个人博客归档。", href: site.blog, label: "Blog" },
        { title: "Follow 资源订阅", description: "通过订阅列表持续追踪资源更新。", href: "https://app.follow.is/share/lists/71853151480300544", label: "Follow" }
      ] }
    ]
  },
  {
    id: "lab", title: "数字实验室", href: "/lab",
    eyebrow: "04 / DIGITAL LAB", summary: "AI、自动化，还有动手的乐趣。",
    description: "试试新的工具，把重复的操作交给自动化。这里收藏 AI、部署与数字工具的探索，也放着持续更新的公开项目。",
    tags: ["个人项目", "公开源码", "实验记录"],
    groups: [{ id: "experiments", title: "工具与实验", cards: [
      { title: "WebWord", description: "收集、浏览与分享数字内容的个人项目。", href: site.webword, label: "在线项目" },
      { title: "公开源码", description: "网站源码、自动化脚本与部署实验。", href: site.github, label: "GitHub" },
      { title: "实验记录", description: "在博客中阅读工具体验与长篇记录。", href: site.blog, label: "Blog" }
    ] }]
  }
];

export const resourceCount = (section: ContentSection) => section.groups.reduce((total, group) => total + group.cards.length, 0);
