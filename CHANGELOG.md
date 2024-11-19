## 0.1.3

### Changed

-   Updated `cloudflare/wrangler-action` to v3.12.1 in `Cloudflare.ts`.
-   Updated `actions/setup-node` to v4.1.0 in `Node.ts` and `NPM.yml`.
-   Updated `actions/cache` to v4.1.2 in `Rust.ts`.
-   Updated `actions/checkout` to v4.2.2 in multiple workflow files
    (`Cloudflare.yml`, `codeql.yml`, `Node.yml`, `NPM.yml`, `Rust.yml`).
-   Updated `github/codeql-action` to v3.27.4 in `codeql.yml`.

## 0.1.2

### Added

-   Added `Action.sh` script for managing GitHub Actions.
-   Added import statements for `Files` type in various command files.

### Changed

-   Updated `.npmignore` to replace `Documentation/` with `docs/` and
    `Summary.md` with `Action.sh`.
-   Updated `package.json`:
    -   Bumped version from 0.1.1 to 0.1.2.
    -   Updated email to `Source/Open@PlayForm.LTD`.
    -   Updated URL to `HTTPS://PlayForm.LTD`.
    -   Updated `deepmerge-ts` to version 7.1.3.
    -   Updated `@octokit/types` to version 13.6.1.
    -   Updated `@playform/build` to version 0.1.8.
    -   Updated `@types/node` to version 22.9.0.
-   Updated various GitHub Actions and workflows:
    -   Updated `cloudflare/wrangler-action` to v3.9.0 in `Cloudflare.ts`.
    -   Updated `actions/setup-node` to v4.0.4 in `Node.ts` and `NPM.yml`.
    -   Updated `actions/upload-artifact` to v4.4.3 in `Node.ts`.
    -   Updated `actions/cache` to v4.1.1 in `Rust.ts`.
    -   Updated `actions/checkout` to v4.2.1 in multiple workflow files.
    -   Updated `github/codeql-action` to v3.26.13 in `codeql.yml`.
-   Improved code formatting and consistency across various TypeScript files.

## 0.1.1

### Changed

-   Updated `@playform/build` to version 0.1.3
-   Updated `@types/node` to version 22.5.0
-   Updated `zod` to version 3.23.8
-   Updated `actions/upload-artifact` to v4.3.6 in Node.ts

## 0.1.0

### Changed

-   Updated `deepmerge-ts` to version 7.1.0
-   Updated `@playform/build` to version 0.1.2
-   Updated `@types/node` to version 20.14.12
-   Updated `zod` to the latest version
-   Updated `Run` script to use `Build 'Source/**/*.ts' --Watch`
-   Added `provenance: true` to `package.json`

## 0.0.8

### Changed

-   Updated version to 0.0.8
-   Updated `deepmerge-ts` to version 7.0.3
-   Updated `@playform/build` to version 0.1.0
-   Updated `@types/node` to version 20.14.10
-   Updated project description to "🔧 Maintain —"

### Fixed

-   Fixed evolving type errors by adding
    `// biome-ignore lint/nursery/noEvolvingTypes:` annotations

## 0.0.7

### Changed

-   Updated version to 0.0.8
-   Updated `deepmerge-ts` to version 7.0.3
-   Updated `@playform/build` to version 0.1.0
-   Updated `@types/node` to version 20.14.10
-   Updated project description to "🔧 Maintain —"

### Fixed

-   Fixed evolving type errors by adding
    `// biome-ignore lint/nursery/noEvolvingTypes:` annotations

## 0.0.6

### Changed

-   Updated version to 0.0.6
-   Updated `@playform/build` to version 0.0.10

## 0.0.5

### Changed

-   Updated version to 0.0.5
-   Added `@playform/build` as a peer dependency
-   Added `peerDependenciesMeta` to mark `@playform/build` as optional

## 0.0.4

### Changed

-   Updated version to 0.0.4
-   Updated project description to "🔧 Maintain —"
-   Updated homepage URL to use HTTPS
-   Updated author information
-   Updated dependencies:
    -   `@octokit/core` to version 6.1.2
    -   `commander` to version 12.1.0
    -   `deepmerge-ts` to version 7.0.1
    -   `zod` to version 3.23.8
    -   `@octokit/types` to version 13.5.0
    -   `@playform/build` to version 0.0.9
    -   `@playform/document` to version 0.0.7
    -   `@types/node` to version 20.12.12
-   Improved code formatting and consistency
-   Updated workflows to use newer versions of actions

### Removed

-   Removed `.env` from `.gitignore`

## 0.0.3

### Changed

-   Updated version to 0.0.3
-   Updated homepage to `https://github.com/Playform/Maintain#readme`
-   Added `Document` script

### Added

-   Added `@playform/document` as a dependency

## 0.0.2

### Changed

-   Updated version to 0.0.2

## 0.0.1

### Added

-   Initial Release
