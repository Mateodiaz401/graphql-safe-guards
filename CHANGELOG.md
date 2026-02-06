# Changelog

All notable changes to this project will be documented in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/).

---

## [Unreleased]

- Internal improvements and documentation refinements.

---

## [1.1.2] – 2026-01-22

### Fixed

- Corrected edge cases where GraphQL introspection queries were still
  partially evaluated under certain validation paths.
- Improved consistency when `ignoreIntrospection` is enabled to ensure
  introspection queries fully bypass depth and complexity validation.

_No breaking changes._

---

## [1.1.0] – 2026-01-22

### Added

- `ignoreIntrospection` option to allow GraphQL introspection queries
  without applying depth and complexity validation.
- Security documentation explaining safe introspection usage for
  private APIs and development tools (GraphQL Playground, Apollo Sandbox).

### Changed

- Introspection queries are now explicitly detected and handled
  during validation rather than relying on implicit field checks.

### Fixed

- Prevented false positives when validating introspection-related fields
  in schemas with strict depth or complexity limits.

_No breaking changes._

---

## [1.0.2]

### Added

- Preset-based configuration (`strict`, `balanced`, `relaxed`) for
  common production use cases.
- Integration tests validating combined depth and complexity limits
  using native `graphql-js` validation.

### Fixed

- Type-safe preset resolution to ensure predictable configuration behavior.

---

## [1.0.0]

### Added

- Initial release.
- Unified depth limiting and query complexity validation.
- Native GraphQL validation rule integration.
- Framework-agnostic design compatible with `graphql-js` and major servers.
