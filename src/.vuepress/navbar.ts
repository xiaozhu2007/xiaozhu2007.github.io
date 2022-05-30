import { defineNavbarConfig } from "vuepress-theme-hope";

export const NavbarConfig = defineNavbarConfig([
  "/",
  {
    text: "博文",
    icon: "note",
    prefix: "/post/",
    children: [
      {
        text: "分类",
        link: "../category",
        icon: "people",
        activeMatch: "^/category/$"
      },      
      {
        text: "随笔",
        link: "../note",
        icon: "note",
        activeMatch: "^/note/$"
      },
      {
        text: "Hexo迁移的文章",
        link: "../post/hexo",
        icon: "hexo",
        activeMatch: "^/hexo/$"
      },
      {
        text: "标签",
        link: "../tag",
        icon: "tag",
        activeMatch: "^/tag/$"
      },
    ],
  },
  {
    text: "博客相关",
    icon: "code",
    children: [
      {
        text: "捐赠",
        icon: "shop",
        link: "https://afdian.net/@xiaozhu2021",
      },
    ],
  },
]);