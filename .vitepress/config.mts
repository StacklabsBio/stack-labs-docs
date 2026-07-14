import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "Stack Labs Docs",
  description: "Product guides and platform information for Stack Labs.",
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: "/stack-labs-mark.png",
    nav: [
      { text: "Get started", link: "/guides/getting-started" },
      { text: "Use the App", link: "/guides/using-the-app" },
      { text: "Support", link: "/support/" },
      { text: "Website", link: "https://stacklabs.bio/" },
      { text: "Open App", link: "https://app.stacklabs.bio/" },
    ],
    sidebar: [
      {
        text: "Start here",
        items: [
          { text: "Product overview", link: "/product/overview" },
          { text: "Getting started", link: "/guides/getting-started" },
          { text: "Install the App", link: "/guides/install-the-app" },
          { text: "Account access", link: "/guides/account-access" },
        ],
      },
      {
        text: "Use Stack Labs",
        items: [
          { text: "Using the app", link: "/guides/using-the-app" },
          { text: "Telegram companion", link: "/guides/telegram-companion" },
        ],
      },
      {
        text: "Privacy and support",
        items: [
          { text: "Data and privacy", link: "/policies/data-and-privacy" },
          { text: "Support", link: "/support/" },
        ],
      },
      {
        text: "Developers",
        collapsed: true,
        items: [{ text: "Platform overview", link: "/developers/platform-overview" }],
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
    ["link", { rel: "icon", href: "/stack-labs-mark.png" }],
    ["meta", { name: "robots", content: "index,follow" }],
    ["meta", { name: "theme-color", content: "#f7fafb" }],
    [
      "script",
      {},
      "try{if(!localStorage.getItem('vitepress-theme-appearance'))localStorage.setItem('vitepress-theme-appearance','light')}catch{}",
    ],
  ],
});
