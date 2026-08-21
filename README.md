# UI Assets — Registry

A collection of copy-paste dev utility components, hooks, and blocks for React, installable with the
shadcn CLI.

```sh
npx shadcn@latest add https://ui-assets-edison.vercel.app/r/copy-button.json
```

## Structure

- `config.ts` — registry identity (name, namespace, homepage, repository URL).
- `docs/` — public documentation pages.
- `items/` — installable source: `items/components`, `items/hooks`, `items/blocks`.

## Consuming this repo

This repository is content-only; it has no build of its own. It's rendered and served by the app
shell at [`xnsteam-ai/edison-ui-assets`](https://github.com/xnsteam-ai/edison-ui-assets), which
mounts this repo as a git submodule at `registry/`.

## Docs

Full docs, including installation instructions and the item catalog, are published at
[ui-assets-edison.vercel.app](https://ui-assets-edison.vercel.app).
