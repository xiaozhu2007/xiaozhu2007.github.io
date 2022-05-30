import { defineNavbarConfig } from "vuepress-theme-hope";

export const NavbarConfig = defineNavbarConfig([
  "/",
  {
    text: "文章",
    icon: "note",
    prefix: "/note/",
    children: [
      {
        text: "随笔",
        link: "",
        icon: "note",
        activeMatch: "^/note/$"
      },
    ],
  },
  {
    text: "博文",
    icon: "note",
    prefix: "/post/",
    children: [
      {
        text: "分类",
        link: "../category",
        icon: "category",
        activeMatch: "^/category/$"
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