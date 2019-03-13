# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 1.11.0 (2019-01-20)

- ✨ Various documentation and setup tweaks after we migrated to monorepo
- ✨ Setup refresh: updated dependencies and all config files using automated tools

## 1.7.0 (2018-12-26)

- ✨ opts.useWildcards ([d541cab](https://gitlab.com/codsen/codsen/tree/master/packages/ast-compare/commits/d541cab))

## 1.6.0 (2018-10-12)

- ✨ Updated all dependencies and restored unit test coverage tracking, both via terminal and via coveralls.io

## 1.5.0 (2018-06-13)

GitHub sold us out. In the meantime, we:

- ✨ Migrated to BitBucket (to host repo + perform CI) and Codacy (for code quality audit)
- ✨ Dropped BitHound (RIP) and Travis
- ✨ Removed `package-lock`

## 1.4.0 (2018-05-14)

### Improved

- ✨ Now pointing unit tests at ES Modules build, not CommonJS-one. This means, unit test coverage will be correct (higher) because there won't be any missing rows that Babel added which are impossible to cover.
- ✨ Tweaks to ava [config](https://github.com/avajs/ava/blob/master/docs/recipes/es-modules.md) in `package.json`, properly enabling the `dev` Rollup builds.

## 1.3.0 (2018-05-01)

### Added

- ✨ Set up [Prettier](https://prettier.io)
- ✨ Removed `package.lock` and `.editorconfig`
- ✨ Wired Rollup to remove comments from non-dev builds. This means we can now leave the `console.log`s in the source code — Rollup will remove them during the builds.

## 1.2.0 (2018-02-11)

### Added

- ✨ `opts.useWildcards` is driven by [matcher](https://github.com/sindresorhus/matcher) and `matcher` up until today was case-insensitive. Today they released the case-sensitive mode and we switched to that. Now all behaviour in wildcards should match non-glob behaviour, case-wise.

## 1.1.0 (2017-10-29)

### Added

- ✨ `opts.useWildcards` (off by default)

## 1.0.0 (2017-10-24)

### Added

- ✨ Public release