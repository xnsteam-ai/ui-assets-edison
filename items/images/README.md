# Stark Images

Curated visual assets. Each item lives in `files/<slug>/` and holds the image plus a
`_registry.mdx` carrying its **Description**, **Prompt** and **Category**.

```
files/texture-001/
  texture-001.jpg
  _registry.mdx
```

## Adding images

Curate the source folder first, then run the ingest script from the app root:

```sh
bun --bun ./scripts/ingest-images.ts --from "/path/to/folder" --category Texture --prefix texture
```

Add `--dry-run` to preview, `--limit n` to cap the batch. The script writes each item with an empty
description and an empty `suggested` prompt for you to fill in — the source files carry no prompt
metadata, so nothing is invented.

## Do not ingest

This registry is published publicly, so every asset must be clear of:

- **Real, identifiable people** — including AI-generated or manipulated likenesses.
- **Third-party brand marks** — logos, wordmarks, social handles, or mock campaigns for real companies.
- **Copyrighted characters** — anime, film, game, or comic characters.

## Prompt provenance

`meta.promptKind: suggested` marks a prompt as a reconstruction that would produce a similar image,
not a recovered generation prompt. The preview dialog labels it as such. Set it to `original` only
when the prompt genuinely came from the generation run.

## Exports

The preview dialog offers four exports per image:

| Export | What it is |
| --- | --- |
| Original image | The published file, untouched. Highest quality. |
| PNG | Genuine re-encode via canvas. |
| SVG wrapper | An SVG embedding the raster as a data URI. **Not a vectorization** — same pixels, larger file. |
| Prompt as Markdown | Title, description, category and prompt as a `.md` file. |

## Prompt structure

Every image carries two prompts in `meta`, describing the same picture:

- `prompt` — a long prose paragraph, ordered: medium and format → composition and crop → subject
  detail → colour (named tones with hex values) → lighting → surface and grain → camera → grading
  → output. State what must *not* appear as explicitly as what must.
- `promptSpec` — the machine-readable twin, a JSON object with the same information plus a
  `negative_prompt` array.

Both exist so a user can paste either one into a different generator and land on the same image
without having to restructure anything. Keep them in sync: if you edit one, edit the other.

`promptKind: suggested` marks a prompt as a reconstruction, never a recovered original.
