import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { basename, dirname, join, resolve } from 'node:path';
import test from 'node:test';
import { generateReleaseNotes } from './release-notes.mjs';

function fixture(t) {
  const directory = mkdtempSync(join(tmpdir(), 'gy-release-test-'));
  t.after(() => {
    if (dirname(resolve(directory)) !== resolve(tmpdir()) || !basename(directory).startsWith('gy-release-test-')) {
      throw new Error('Refusing to remove an unexpected test directory.');
    }
    rmSync(directory, { recursive: true, force: true });
  });
  const git = (...args) => execFileSync('git', args, { cwd: directory, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
  git('init', '--initial-branch=main');
  git('config', 'user.name', 'Release Test');
  git('config', 'user.email', 'release-test@example.invalid');
  const commit = (message) => git('-c', 'commit.gpgsign=false', 'commit', '--allow-empty', '-m', message);
  return { directory, git, commit };
}

test('first release includes direct commits, grouping, safe titles and legacy messages', (t) => {
  const { directory, git, commit } = fixture(t);
  commit('feat: 新增成长里程碑');
  commit('fix(nav): 修复专区跳转');
  commit('docs: 更新维护说明');
  commit('Legacy update <script> [link](url)');
  commit('feat!: 调整内容结构');
  git('tag', 'v2.1.0');
  const notes = generateReleaseNotes('v2.1.0', 'owner/site', directory);
  assert.match(notes, /首次发布/);
  assert.match(notes, /## 新增功能\n\n- 新增成长里程碑/);
  assert.match(notes, /## 问题修复\n\n- 修复专区跳转/);
  assert.match(notes, /## 优化与维护\n\n- 更新维护说明/);
  assert.ok(notes.includes('Legacy update &lt;script&gt; \\[link\\]\\(url\\)'));
  assert.match(notes, /\*\*不兼容变更\*\*/);
  assert.match(notes, /\/tree\/v2\.1\.0/);
});

test('subsequent release only includes changes after the preceding reachable stable version', (t) => {
  const { directory, git, commit } = fixture(t);
  commit('feat: 旧内容');
  git('tag', 'v2.9.0');
  git('switch', '-c', 'unreleased');
  commit('feat: 其他分支');
  git('tag', 'v2.10.1');
  git('switch', 'main');
  commit('feat: 上个版本');
  git('tag', '-a', 'v2.10.0', '-m', 'Previous release');
  git('tag', 'not-a-version');
  commit('fix: 本次修复');
  git('tag', 'v2.11.0-beta.1');
  git('tag', 'v2.11.0');
  const notes = generateReleaseNotes('v2.11.0', 'owner/site', directory);
  assert.match(notes, /v2\.10\.0 至 v2\.11\.0/);
  assert.match(notes, /本次修复/);
  assert.doesNotMatch(notes, /旧内容|上个版本|其他分支/);
  assert.match(notes, /\/compare\/v2\.10\.0\.\.\.v2\.11\.0/);
});

test('same-commit versions produce an explicit empty update', (t) => {
  const { directory, git, commit } = fixture(t);
  commit('feat: Initial');
  git('tag', 'v1.0.0');
  git('tag', 'v1.0.1');
  assert.match(generateReleaseNotes('v1.0.1', 'owner/site', directory), /没有新增提交/);
});

test('invalid version tags and repository values are rejected before git runs', () => {
  for (const tag of ['v1.0', 'v01.0.0', 'v1.0.0-beta.1', '--all', 'v1.0.0;echo injected']) {
    assert.throws(() => generateReleaseNotes(tag, 'owner/site'), /版本标签/);
  }
  assert.throws(() => generateReleaseNotes('v1.0.0', 'owner/site\nextra'), /仓库名称/);
});
