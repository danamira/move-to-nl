const { description } = require("../../package");

module.exports = {
  theme: "default-rtl",

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "MoveToNL",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "درباره هلند",
        link: "/guide/",
      },
      {
        text: "سوالات متداول",
        link: "/faq/",
      },
    ],
    sidebar: {
      "/FirstSteps/": [
        {
          title: "قدم های اول",
          collapsable: false,
          children: ["Why", "Procedure"],
        },
      ],

      "/ApplyingForUni/": [
        {
          title: "قدم های اول",
          collapsable: false,
          children: [
            "EducationSystem",
            "Unis",
            "Fund",
          ],
        },
        {
          title:"مقاطع تحصیلی",
          children:[ "Bachelor",
          "Master",
          "PhD"],
          collapsable:false,
        },
        {
          title: "پروسه اپلای",
          children: ["Docs","Translation", "CV", "MotivationLetter"],
          collapsable:false
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
