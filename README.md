# UI Assets — Registry

UI Assets is organized into eight sub-registries, each installable with the shadcn CLI under its own
namespace:

| Domain | Registry | Namespace |
| --- | --- | --- |
| `components` | Stark Components | `@stark-components` |
| `templates` | Stark Templates | `@stark-templates` |
| `icons` | Stark Icons | `@stark-icons` |
| `logos` | Stark Logos | `@stark-logos` |
| `illustrations` | Stark Illustrations | `@stark-illustrations` |
| `fonts` | Stark Fonts | `@stark-fonts` |
| `images` | Stark Images | `@stark-images` |
| `videos` | Stark Videos | `@stark-videos` |

```sh
npx shadcn@latest add https://ui-assets-edison.vercel.app/r/components/copy-button.json
```

## Structure

- `config.ts` — site identity (`registryConfig`) plus per-registry identity for the eight domains
  (`subRegistries`: name, namespace, description).
- `docs/` — public documentation pages.
- `items/{domain}/{type}/{name}/` — installable source, one top-level folder per domain
  (`components`, `templates`, `icons`, `logos`, `illustrations`, `fonts`, `images`, `videos`), each further split by item type
  (`components`, `hooks`, `blocks`, `fonts`, `files`, ...).

## Consuming this repo

This repository is content-only; it has no build of its own. It's rendered and served by the app
shell at [`xnsteam-ai/edison-ui-assets`](https://github.com/xnsteam-ai/edison-ui-assets), which
mounts this repo as a git submodule at `registry/`.

## Docs

Full docs, including installation instructions and the item catalog, are published at
[ui-assets-edison.vercel.app](https://ui-assets-edison.vercel.app).
