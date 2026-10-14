# GY念六 Digital Base

GY念六的个人数字主页，连接 Apple / iOS 工具、实操教程、资源收藏、数字实验与 B 站创作成长记录。

## 页面层级

- `/`：个人介绍 → 四个内容方向 → 三篇精选视频 → B 站成长里程碑 → 时间手记 → 社区联系。
- `/apple/`：按 Apple Watch、Apple TV、iOS 工具分组的资源。
- `/tutorials/`：教程下载、资源文档、频道与订阅。
- `/pan/`：网盘资料、阅读订阅与按需加载的每日一图。
- `/lab/`：工具与实验入口、GitHub 公开项目。

二级页面由 `ZonePage` 统一布局，`ResourceDirectory` 提供专区内搜索、分类目录与原生折叠列表。搜索匹配标题、描述和来源标签，自动展开匹配分类；无结果时可一键恢复完整目录。默认展开第一个分类，点击目录或访问分类锚点会展开对应内容。主导航在所有页面可用，移动端提供可收起的菜单。

`/#milestones` 展示 5 个由站主提供的 B 站真实节点，默认选中 2026 年 2 月 4 日六周年记录。点击时间线可查看各节点详情，键盘支持方向键、Home 和 End。播放成就属于稿件，作品数和粉丝数属于对应日期的历史记录，不是实时统计。其他平台的成长记录尚未添加。

## 技术与开发

Next.js 15 App Router、React 19、TypeScript、Tailwind CSS 和 Lucide 图标。需要 Node.js 20 或以上版本。

```bash
npm install
npm run dev
npm run typecheck
npm run build
```

颜色、间距、页面布局与响应式规则集中在 `app/globals.css`，采用暖白、墨绿与浅鼠尾草绿，支持桌面与移动端、可见键盘焦点和减少动态效果偏好。

## 内容维护

- `data/site.ts`：品牌、主导航、社交链接和精选视频降级数据。
- `data/sections.ts`：四个专区的标题、介绍、标签和资源分类；首页入口与各专区共用，入口数量自动计算。
- `data/tutorials.ts`：教程与文档入口；`sections.ts` 根据 `label` 归入分类。
- `data/milestones.ts`：B 站成长节点，包含日期、标题、历史指标、说明和跳转链接。
- 各专区的 `page.tsx`：读取对应内容数据、生成 metadata，装配专区附加功能。
- `lib/aggregators.ts`：服务端聚合 Bilibili 与 GitHub；接口不可用时使用缓存或本地精选内容。
- `components/TimeProgress.tsx`：按北京时间计算年度、月度和周进度，每分钟刷新，保留闰年处理。

首页仅展示三篇精选视频，完整视频通过 B 站入口访问。GitHub 项目在实验室页面展示。年度时间进度位于首页「时间手记」，周/月明细、QQ 群号、每日一图均按需展开。详细功能与内容维护方法见 [网站维护说明](docs/site-guide.md)。

## 构建与部署

项目启用 Next.js 静态导出，`npm run build` 生成 `out/`。将其全部内容上传到支持目录索引的静态托管服务，或使用现有 Vercel 配置部署。通过站点根目录访问，不要直接双击打开导出的 HTML。开发预览使用 `npm run dev`；静态产物应通过 HTTP 服务预览，`npm run start` 不适用于当前静态导出配置。

静态导出的聚合内容在构建时更新；浏览器中的时间进度独立实时刷新。需要刷新视频缓存时运行 `npm run update:bilibili`，随后重新构建。
