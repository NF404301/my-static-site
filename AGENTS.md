# 项目约定

- Next.js App Router + React + TypeScript；静态导出到 `out/`，不要添加依赖常驻服务的功能。
- 开发用 `npm run dev`；检查用 `npm run typecheck`、`npm run build`。静态导出不能用 `next start` 预览。
- 四个专区的共享内容在 `data/sections.ts`，教程原始条目在 `data/tutorials.ts`。新增来源标签时同步分类规则。
- 成长经历在 `data/milestones.ts`，按日期升序维护；仅使用站主确认的经历和日期。
- 里程碑数值是对应日期的历史记录。稿件播放成就不等于账号累计播放；粉丝与作品数量不等于实时指标。
- 不将 GitHub / B 站实时聚合结果写回成长记录。
- 布局、颜色和响应式规则集中在 `app/globals.css`；保留键盘交互、可见焦点及减少动态效果支持。
- 二级页面复用 `ZonePage` 和 `ResourceDirectory`，保留分类锚点自动展开与搜索空状态。
- 构建期外部请求必须保留超时与降级，避免接口不可用导致静态构建失败。
- 外链在新标签打开时保留 `rel="noopener noreferrer"`。
- 避免同时运行开发服务与构建，二者会共用 `.next`。
- 发布使用 `vX.Y.Z` 标签；提交标题优先使用 `feat:` / `fix:` 等前缀，供更新说明分类。未经用户要求，不自动打版本标签。

维护说明：[docs/site-guide.md](docs/site-guide.md)。运行与部署：[README.md](README.md)。版本发布：[docs/releases.md](docs/releases.md)。
