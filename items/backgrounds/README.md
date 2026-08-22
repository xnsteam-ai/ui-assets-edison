# Stark Backgrounds

Pure-CSS surfaces: background patterns and shaders. Every item publishes **one
stylesheet and nothing else** — no JavaScript, no raster assets, no runtime.

## Categories

`meta.category` is either **Background** or **Shader** — those are the only two. This registry does
not carry a Gradient category; gradients are a technique the items use, not a category they are
filed under. The homepage renders one sub-headed grid per category inside the Backgrounds section.

## The custom-property contract

Every item follows the same shape, and this is what makes it editable:

```css
/* stark:defaults */
.stark-bg-<name> {
  --some-value: 24px;
}
/* stark:end */

.stark-bg-<name> { /* the effect, reading only the variables above */ }
```

Two rules, both load-bearing:

1. **Every value the user can change is declared in the `stark:defaults` block.** The effect rules
   below it never hard-code a number or a colour.
2. **Nothing outside that block is a config surface.** The registry's `applyCssDefaults`
   (`src/lib/registry/customize.server.ts`) rewrites declarations *only* between the markers, so a
   shared preview config can never reach into the effect itself.

Each control in `_registry.mdx` names the property it drives with `cssProp`. Adding a knob means
adding a declaration to the block and a control that points at it — nothing else.

## Presets

A preset is a `data-preset` attribute plus a rule that re-declares some variables. Because inline
styles beat attribute selectors, a user can pick a preset and still override one value.

Presets are **not** baked into an exported stylesheet — the export keeps the authored defaults, and
the consumer sets the attribute in their own markup. Each item's MDX says so explicitly.

## Preview parity

`_preview.tsx` imports the published `.css` file directly, so the preview and the installed artifact
are the same bytes. There is no second implementation to keep in sync.

Note that the stylesheet is imported from the preview rather than from the app's `styles.css`:
Tailwind's pipeline prunes `@keyframes` it believes are unused, which silently kills the animated
items.

## Accessibility

Every animated item wraps its animation in `@media (prefers-reduced-motion: reduce)`. Motion is also
**off by default** on every item — the user opts in through the panel.

## Authoring a new item

`_registry.mdx` and `_preview.tsx` are mechanical from a control table; only the CSS is hand-written.
The generator used for the initial set lives in the session scratchpad, but the contract above is the
thing to preserve — an item that satisfies it works with the panel, the exporter, and the share link
with no further wiring.
