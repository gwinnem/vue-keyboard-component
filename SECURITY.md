# Security Policy

## Supported versions

| Version | Supported          |
| ------- | ------------------ |
| 2.x     | :white_check_mark: |
| 1.x     | :x:                |

Only the latest major version receives security fixes. This package has **no runtime
dependencies** (only a `vue` peer dependency), so most supply-chain risk in this repo lives in
`devDependencies` (build tooling, tests, docs) rather than in what's actually published to
consumers.

## Reporting a vulnerability

Please **do not open a public GitHub issue** for security vulnerabilities.

Instead, use [GitHub's private vulnerability reporting](https://github.com/gwinnem/vue-keyboard-component/security/advisories/new)
(Security tab → "Report a vulnerability") on this repository. This lets us discuss and fix the
issue privately before any public disclosure.

If you're unable to use GitHub's private reporting, open a regular issue asking for an
alternative contact method, without including vulnerability details.

Please include, where possible:

- A description of the vulnerability and its potential impact.
- Steps to reproduce, or a minimal reproduction repository/snippet.
- The version(s) affected.

## What's in scope

- The published package itself (`dist/*`, as installed from npm).
- The build pipeline that produces it (`vite.config.js`, `package.json` scripts).

## What's out of scope

- Vulnerabilities in `devDependencies` that never ship in the published package (tracked via
  `npm audit` in CI instead - see the [changelog](./CHANGELOG.md) for the
  current status of known, upstream-blocked findings).
- Issues that require the consumer to have already introduced an XSS vulnerability in their own
  application (e.g. rendering untrusted HTML into a keyboard layout's `display` map).
