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
