# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/).

---

## [Unreleased]

## [1.1.2] – 2026-01-22

## [1.1.0] – 2026-01-22

### Added

- `ignoreIntrospection` option to allow GraphQL introspection queries
  without applying depth and complexity validation.
- Documentation explaining how to use `ignoreIntrospection` with
  GraphQL Playground and Apollo Sandbox.
- Security guidelines for private APIs with introspection enabled.

### Changed

- `ignoreIntrospection` option to exclude GraphQL introspection queries
  from depth and complexity validation.

### Fixed

- Ensured GraphQL introspection queries are excluded from depth and
  complexity validation when `ignoreIntrospection` is enabled.

---

## [1.0.2]

### Added

- Preset-based configuration (`strict`, `balanced`, `relaxed`)
- Integration tests validating combined depth and complexity limits

### Fixed

- Type-safe preset resolution
