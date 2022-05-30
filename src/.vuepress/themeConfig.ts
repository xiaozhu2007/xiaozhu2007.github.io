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
  repo: "https://github.com/xiaozhu2007/xiaozhu2007.github.io",
  repoDisplay: false,
  docsDir: "src",
  docsBranch: "master",
  locales: {
    "/": {
      navbar: NavbarConfig,
      sidebar: {
        "/about/": "structure",
        "/note/": "structure",
        "/post/hexo/": "structure",
        // fallback
        "/": [
          "" /* / */,
          "about" /* /about.html */,
        ],
      },

      blog: {
        description: "NTBot 项目成员，Node.js开发者",
        intro: "/about/",
        articlePerPage: 8, // 每个分页的文章数
        medias: {
          QQ: "http://wpa.qq.com/msgrd?v=3&uin=3356136957&site=qq&menu=yes",
          Qzone: "https://3356136957.qzone.qq.com/",
          Gmail: "mailto:pig2333minecraft@yeah.net",
          Gitee: "https://gitee.com/xiaozhu2007", // Gitee
          Zhihu: "https://www.zhihu.com/people/tian-li-pa-99", // 甜力怕
          GitHub: "https://github.com/xiaozhu2007",
        },
      },
    },
  },

  // Footer
  displayFooter: true,
  copyright: "Copyright © 2019-present HackPig520",
  // Page Info
  pageInfo: [
    "Author",
    "Category",
    "Tag",
    "Date",
    "Original",
    "Word",
    "ReadingTime",
  ],
  // Plugins Config
  plugins: {
    blog: {
      autoExcerpt: true
      },
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
      // tex: true,
      vpre: true,
    },
    copyCode: {
      duration: 1000,
      showInMobile: false,
      delay: 300,
    },
    sitemap: { 
      changefreq: "weekly" 
    }
  },
});