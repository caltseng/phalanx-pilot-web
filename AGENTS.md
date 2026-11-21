# Agent instructions

- Node.js 20+, ESM only. Do not add dependencies; keep `package-lock.json`
  committed and in sync with `package.json`.
- Code lives in `src/`; tests live in `test/` and use `node:test`.
- Run the tests from the repo root before opening a PR:

  ```sh
  npm ci
  npm test
  ```

- Add or update a test for every behavior change.
- CI (`.github/workflows/ci.yml`) runs the same commands on Ubuntu and Windows;
  `test (ubuntu-latest)` and `test (windows-latest)` are required on `main`.
