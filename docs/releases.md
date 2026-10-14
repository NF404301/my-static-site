# 版本发布

## 发布一个版本

在最新的 `main` 上，确认本次功能修改已提交并推送。按需要先更新 `package.json` 与 `package-lock.json` 的版本号并提交（可用 `npm version 2.1.0 --no-git-tag-version`）。然后为准备发布的提交创建标签：

```bash
git switch main
git pull --ff-only origin main
git tag -a v2.1.0 -m "页面重构与 B 站成长里程碑"
git push origin v2.1.0
```

以上为示例版本号；每次发布使用尚未存在的新版本号。当前只支持正式版本 `vX.Y.Z`，不支持 `beta` / `rc` 标签。不要移动已发布的标签。

到仓库 [Actions → Release](https://github.com/NF404301/my-static-site/actions/workflows/release.yml) 查看运行结果。成功后，版本会出现在 [Releases](https://github.com/NF404301/my-static-site/releases)。只推送普通提交不会创建 Release。首次添加此流程也不会立即发布版本。

## 更新说明如何生成

`scripts/release-notes.mjs` 从目标标签的历史中选择版本号小于当前版本的最高正式标签，收集两者之间的非合并提交；首次发布收集当前标签之前的全部非合并提交。因此直接推送的提交与 PR 内的普通提交都能出现，不依赖 PR 标签。带标签但尚未成功发布的版本也会作为比较基线，发布失败时应先修复或重跑该版本。

| 提交标题示例 | Release 分类 |
| --- | --- |
| `feat: 新增 B 站成长里程碑` | 新增功能 |
| `fix: 修复专区跳转` | 问题修复 |
| `refactor: 统一专区布局`、`docs: 更新维护说明` | 优化与维护 |
| 没有标准前缀的已有提交 | 其他更新，保留原始标题 |

同样支持 `feat(milestones): ...`；`feat!: ...` 等带 `!` 的标题会标出不兼容变更。请把提交标题写成访客能理解的具体变化。脚本不会猜测功能，也不会自动翻译英文标题。每条记录含提交链接，并附版本差异链接。

## 工作流与排错

`.github/workflows/release.yml` 先执行生成器测试、`npm ci`、`npm run typecheck` 和 `npm run build`，再生成说明、创建 Release。使用 GitHub 自带的 `GITHUB_TOKEN`；只有发布任务具有 `contents: write`，无需保存个人访问令牌。现有 Release 会跳过，不覆盖手动编辑的说明。

修改此工作流或生成器并推送到 `main` 时会自动运行验证。也可在 Actions 页面选择 **Run workflow** 手动验证；手动运行不会发布版本。标签推送不受文件路径过滤限制。

- 验证失败：查看对应步骤日志，修复后使用新的版本标签；如果只是临时网络失败，可重跑原任务。
- 权限错误：确认仓库允许 GitHub Actions，且组织策略允许工作流请求 `contents: write`。
- 推送后未运行：确认标签指向包含此工作流的提交，并且是通过用户的 Git 凭据推送。其他工作流用默认 `GITHUB_TOKEN` 推送的标签通常不会触发新工作流。
- 重跑：已有 Release 会保留；尚未创建时会重新尝试发布。GitHub 源码压缩包由 Release 自动提供，此流程不上传 `out/` 构建产物。

本地测试生成器：`node --test scripts/release-notes.test.mjs`。如已有本地版本标签，可预览说明：`node scripts/release-notes.mjs v2.1.0 NF404301/my-static-site release-preview.md`，预览文件无需提交。

GitHub Release 是版本记录，网站上线仍由 Vercel 的部署流程负责，二者状态独立。
