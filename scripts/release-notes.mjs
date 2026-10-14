import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const versionPattern = /^v(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/;

function compareVersions(left, right) {
  const a = left.slice(1).split('.').map(BigInt);
  const b = right.slice(1).split('.').map(BigInt);
  for (let index = 0; index < 3; index++) {
    if (a[index] !== b[index]) return a[index] > b[index] ? 1 : -1;
  }
  return 0;
}

function escapeMarkdown(text) {
  return text.replace(/[&<>]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[character])
    .replace(/([\\`*_{}\[\]()#!|~])/g, '\\$1');
}

export function generateReleaseNotes(tag, repository, cwd = process.cwd()) {
  if (!versionPattern.test(tag)) throw new Error('版本标签必须使用 v主版本.次版本.修订号，例如 v2.1.0。');
  if (!/^[\w.-]+\/[\w.-]+$/.test(repository)) throw new Error('仓库名称必须使用 owner/repository 格式。');
  const git = (...args) => execFileSync('git', args, { cwd, encoding: 'utf8' }).trim();
  const target = `refs/tags/${tag}`;
  git('rev-parse', '--verify', `${target}^{commit}`);
  // Only compare against earlier stable versions in the target's own history.
  const previous = git('tag', '--merged', target).split('\n')
    .filter((candidate) => versionPattern.test(candidate) && compareVersions(candidate, tag) < 0)
    .sort(compareVersions).at(-1);
  const range = previous ? `refs/tags/${previous}..${target}` : target;
  const log = git('log', '--reverse', '--no-merges', '--format=%H%x00%s', range, '--');
  const groups = { '新增功能': [], '问题修复': [], '优化与维护': [], '其他更新': [] };
  for (const line of log ? log.split('\n') : []) {
    const [sha, subject] = line.split('\0');
    const conventional = subject.match(/^(\w+)(?:\([^)]*\))?(!)?:\s+(.+)$/);
    const type = conventional?.[1];
    const category = type === 'feat' ? '新增功能' : type === 'fix' ? '问题修复'
      : ['perf', 'refactor', 'docs', 'test', 'build', 'ci', 'chore', 'style'].includes(type) ? '优化与维护' : '其他更新';
    const title = escapeMarkdown(conventional?.[3] ?? subject);
    groups[category].push(`- ${conventional?.[2] ? '**不兼容变更**：' : ''}${title} ([${sha.slice(0, 7)}](https://github.com/${repository}/commit/${sha}))`);
  }
  const body = [
    `# ${tag} 更新说明`,
    previous ? `本次汇总 ${previous} 至 ${tag} 之间的提交。` : '首次发布：汇总截至此版本的全部提交。',
    ...Object.entries(groups).filter(([, items]) => items.length).map(([title, items]) => `## ${title}\n\n${items.join('\n')}`),
    ...(!log ? ['此版本没有新增提交。'] : []),
    previous
      ? `[查看完整差异](https://github.com/${repository}/compare/${previous}...${tag})`
      : `[查看版本代码](https://github.com/${repository}/tree/${tag})`,
    '更新条目来自 Git 提交标题；网站部署状态请查看 Vercel。'
  ];
  return `${body.join('\n\n')}\n`;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const [tag, repository, output] = process.argv.slice(2);
  if (!output) throw new Error('用法：node scripts/release-notes.mjs <tag> <owner/repository> <output.md>');
  writeFileSync(output, generateReleaseNotes(tag, repository), 'utf8');
}
