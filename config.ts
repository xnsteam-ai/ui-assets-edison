export const registryConfig = {
  name: "UI Assets",
  registryName: "UI Assets",
  namespace: "@assets",
  description: "A collection of copy-paste dev utility components, hooks, and blocks for React.",
  homepage: "https://ui-assets-edison.vercel.app",
  repositoryUrl: "https://github.com/xnsteam-ai/ui-assets-edison",
} as const;

export const subRegistries = {
  components: {
    name: "Stark Components",
    namespace: "@stark-components",
    description:
      "Reusable, production-ready UI components built with Stark's design system for consistent web and desktop experiences.",
  },
  templates: {
    name: "Stark Templates",
    namespace: "@stark-templates",
    description:
      "Full-page and section templates composed from Stark components for fast, consistent product surfaces.",
  },
  icons: {
    name: "Stark Icons",
    namespace: "@stark-icons",
    description:
      "Stark's official icon set, built with a clean, minimal, bold, and consistent visual language for modern web and desktop apps.",
  },
  logos: {
    name: "Stark Logos",
    namespace: "@stark-logos",
    description:
      "Stark's official logos, wordmarks, and brand symbols for consistent identity across products and surfaces.",
  },
  illustrations: {
    name: "Stark Illustrations",
    namespace: "@stark-illustrations",
    description:
      "Stark's illustrations and brand graphics, drawn with a clean, minimal, bold, and consistent visual language.",
  },
  fonts: {
    name: "Stark Fonts",
    namespace: "@stark-fonts",
    description:
      "Stark's fonts and typography, providing consistent font styles, weights, and typographic utilities for modern web and desktop apps.",
  },
  images: {
    name: "Stark Images",
    namespace: "@stark-images",
    description:
      "Curated Stark photography, textures, and visual assets optimized for consistent use across modern web and desktop apps.",
  },
  videos: {
    name: "Stark Videos",
    namespace: "@stark-videos",
    description:
      "Stark motion and video assets, optimized for consistent use across modern web and desktop apps.",
  },
  backgrounds: {
    name: "Stark Backgrounds",
    namespace: "@stark-backgrounds",
    description:
      "Stark's pure-CSS surface layer: background patterns and shaders, every value exposed as an editable custom property.",
  },
  external: {
    name: "Stark External",
    namespace: "@stark-external",
    description:
      "A curated index of the best external shadcn-compatible libraries and components, with one unified CLI for finding and installing them.",
  },
} as const;

export type SubRegistryKey = keyof typeof subRegistries;
