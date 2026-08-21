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
  icons: {
    name: "Stark Icon + Logo + Illustration",
    namespace: "@stark-icons",
    description:
      "Stark's official Icons, Logos, and Illustrations, built with a clean, minimal, bold, and consistent visual language for modern web and desktop apps.",
  },
  fonts: {
    name: "Stark Font",
    namespace: "@stark-fonts",
    description:
      "Stark's fonts and typography, providing consistent font styles, weights, and typographic utilities for modern web and desktop apps.",
  },
  media: {
    name: "Stark Images & Video",
    namespace: "@stark-media",
    description:
      "Stark's Images & Videos, providing curated, reusable visual assets optimized for consistent use across modern web and desktop apps.",
  },
} as const;

export type SubRegistryKey = keyof typeof subRegistries;
