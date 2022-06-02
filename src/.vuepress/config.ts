import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import themeConfig from "./themeConfig";

export default defineUserConfig({
  theme: hopeTheme({
    dest: "./src/.vuepress/dist",

    head: [
      ["meta", { name: "site-verification", content: "4H7tt6db25szevS8" }],
      ["meta", { name: "5-site-verification", content: "4H7tt6seknykgyar654vS8" }],
      [
        "link",
        {
          rel: "mask-icon",
          href: "/assets/safari-pinned-tab.svg",
          color: "#5c92d1",
        },
      ],
    ],

    locales: {
      "/": {
        lang: "zh-CN",
        title: "HackPig520",
        description: "差若毫厘，缪以千里。",
      },
    },

    themeConfig,
  })
  // other config
});
