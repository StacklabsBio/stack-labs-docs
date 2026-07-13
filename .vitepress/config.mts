import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "Stack Labs Docs",
  description: "Product guides and platform information for Stack Labs.",
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: "Product", link: "/product/overview" },
      { text: "Guides", link: "/guides/getting-started" },
      { text: "Developers", link: "/developers/platform-overview" },
      { text: "Support", link: "/support/" },
    ],
    sidebar: [
      {
        text: "Product",
        items: [{ text: "Overview", link: "/product/overview" }],
      },
      {
        text: "Guides",
        items: [
          { text: "Getting started", link: "/guides/getting-started" },
          { text: "Using the app", link: "/guides/using-the-app" },
        ],
      },
      {
        text: "Developers",
        items: [
          { text: "Platform overview", link: "/developers/platform-overview" },
        ],
      },
      {
        text: "Policies",
        items: [
          { text: "Data and privacy", link: "/policies/data-and-privacy" },
        ],
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/StacklabsBio/stack-labs-docs",
      },
    ],
    footer: {
      message: "Stack Labs documentation",
      copyright: "Copyright © 2026 Stack Labs",
    },
    search: { provider: "local" },
  },
  head: [
    ["meta", { name: "robots", content: "index,follow" }],
    ["meta", { name: "theme-color", content: "#071317" }],
  ],
});
