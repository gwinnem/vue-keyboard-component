# Governance

## Maintainership

This project currently has a single maintainer ([@gwinnem](https://github.com/gwinnem)), who has
final say over what gets merged and released. There is no formal maintainer team, steering
committee, or `CODEOWNERS`-based review requirement at this time.

**What this means for adopters:** this is a genuine bus-factor-of-one project. If continuity of
maintenance matters for your use case, factor that into your risk assessment - the code is MIT
licensed, so a fork remains available to you regardless of this project's future maintenance
status.

## Decision-making

- Bug fixes and non-breaking improvements are merged at the maintainer's discretion after passing
  CI (typecheck, lint, tests, build - see [`CONTRIBUTING.md`](./CONTRIBUTING.md)).
- Breaking changes are called out explicitly in the [changelog](./CHANGELOG.md) under a new major
  version heading.
- Feature requests and layout requests are tracked as GitHub issues; there's no formal roadmap
  voting process - see the [roadmap](https://vue-virtual-keyboard.winnem.tech/guide/roadmap) for
  what's currently planned.

## Becoming a maintainer

Not currently a formal process. Sustained, high-quality contributions (well-tested PRs, thoughtful
issue triage) are the practical path - reach out via an issue if you're interested in taking on a
more active role.

## Changes to this document

Given the single-maintainer status, changes to this file don't currently require any process
beyond a normal PR.
