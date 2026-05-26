# GY念六 Digital Base

一个从静态个人主页升级而来的个人数字内容生态中枢。

## 定位

这不是传统博客，也不是链接导航页，而是一个长期更新的 Digital Base：

- 主站 `000919.xyz`：品牌门户、内容矩阵、最近更新、社区入口、项目总览
- Apple 专区 `apple.000919.xyz`：Apple / iOS / TrollStore / TestFlight / Apple TV
- Alist 网盘 `pan.000919.xyz`：资料、工具包、文档与资源站
- AI 实验室 `lab.000919.xyz`：AI、VPS、自动化、部署和实验记录

## 技术栈

- Next.js App Router
- TypeScript
- TailwindCSS
- Vercel
- Server-side aggregation with graceful fallback

## 目录结构

```txt
app/
  apple/page.tsx       Apple 专区占位页
  lab/page.tsx         AI 实验室占位页
  pan/page.tsx         Alist/资源占位页
  globals.css          全局 Tailwind 与玻璃拟态样式
  layout.tsx           SEO metadata 与根布局
  page.tsx             主站首页
  robots.ts            robots
  sitemap.ts           sitemap
components/
  Community.tsx        社区入口
  ContentMatrix.tsx    内容矩阵
  Hero.tsx             首页首屏
  LatestVideos.tsx     B站最新视频/降级精选
  Projects.tsx         子域、项目与 GitHub 聚合
  SectionHeader.tsx    通用标题
  Shell.tsx            Header / Footer
  UpdatesAndLab.tsx    最近更新与最近折腾
  ZonePage.tsx         子域占位页模板
data/
  site.ts              品牌、导航、内容、社区、项目数据
lib/
  aggregators.ts       B站与 GitHub 动态聚合函数
public/
  avatar.jpg           头像素材
```

## 内容聚合

- B站：服务端尝试拉取 Bilibili 公开空间视频列表，失败时展示本地精选教程。
- GitHub：服务端拉取 `NF404301` 最近更新项目，失败时展示本地降级项目。
- Telegram / QQ：作为社区模块展示，不在前端实时抓取，避免失效和加载不稳定。

## 开发

```bash
npm install
npm run dev
```

## 部署

Vercel 会识别 Next.js 项目。子域可在 Vercel 项目中绑定到同一应用，再按路径或后续中间件扩展到对应专区。

项目已启用 Next.js 静态导出，`npm run build` 会生成 `out/` 目录。部署到普通静态托管时，上传 `out/` 里的全部内容，并通过站点根目录访问；不要只双击打开单个 `index.html`，否则 `/_next/` 样式和脚本资源会加载不到。
