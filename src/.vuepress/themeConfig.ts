import { defineThemeConfig } from "vuepress-theme-hope";

import { NavbarConfig } from "./navbar";

export default defineThemeConfig({
  hostname: "https://xiaozhu2007.gitlab.io/",
  author: {
    name: "HackPig520",
    url: "https://xiaozhu2007.gitlab.io",
  },
  iconPrefix: "iconfont icon-",
  logo: "/logo.png",
  repo: "https://gitlab.com/xiaozhu2007/xiaozhu2007",
  repoDisplay: false,
  docsDir: "src",
  locales: {
    "/": {
      navbar: NavbarConfig,
      sidebar: {
        "/about/": "structure",
        "/note/": "structure",
        // fallback
        "/": [
          "" /* / */,
          "contact.html" /* /contact.html */,
          "about" /* /about.html */,
        ],
      },

      blog: {
        description: "QBot 项目成员，前端开发者",
        intro: "/about/",
        medias: {
          QQ: "http://wpa.qq.com/msgrd?v=3&uin=3356136957&site=qq&menu=yes",
          Qzone: "https://3356136957.qzone.qq.com/",
          Gmail: "mailto:pig2333minecraft@yeah.net",
          Gitee: "https://gitee.com/xiaozhu2007",
        },
      },
    },
  },

  displayFooter: true,
  copyright: "Copyright © 2019-present HackPig520",

  plugins: {
    blog: true,

    feed: {
      atom: true,
      json: true,
      rss: true,
    },

    readingTime: {
      wordPerMinute: 180,
    },
    mdEnhance: {
      align: true,
      demo: true,
      flowchart: true,
      footnote: true,
      presentation: true,
      sub: true,
      sup: true,
      tex: true,
      vpre: true,
    },
  },
});