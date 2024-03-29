// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const dotenv = require("dotenv");

dotenv.config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Clinic Documentation",
  tagline: "Clinic are cool",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "pingcap", // Usually your GitHub org/user name.
  projectName: "clinic-docs", // Usually your repo name.

  i18n: {
    defaultLocale: process.env.DOCS_LANG,
    locales: ["en", "zh"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: `docs/${process.env.DOCS_LANG}`,
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/shhdgit/clinic-docs/blob/main",
          breadcrumbs: false,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      }),
    ],
  ],

  plugins: ["docusaurus-plugin-sass"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: true,
      },
      navbar: {
        // hideOnScroll: true,
        logo: {
          alt: "Clinic Logo",
          src: "img/logo.png",
          href: "/docs",
        },
        items: [
          {
            type: "doc",
            docId: "index",
            position: "left",
            label: "Guide",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          // {
          //   href: "https://github.com/facebook/docusaurus",
          //   label: "GitHub",
          //   position: "right",
          // },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Clinic",
                to: "/docs",
              },
            ],
          },
          // {
          //   title: "Community",
          //   items: [
          // {
          //   label: "Stack Overflow",
          //   href: "https://stackoverflow.com/questions/tagged/docusaurus",
          // },
          // {
          //   label: "Discord",
          //   href: "https://discordapp.com/invite/docusaurus",
          // },
          // {
          //   label: "Twitter",
          //   href: "https://twitter.com/docusaurus",
          // },
          //   ],
          // },
          // {
          //   title: "More",
          //   items: [
          //     {
          //       label: "GitHub",
          //       href: "https://github.com/facebook/docusaurus",
          //     },
          //   ],
          // },
        ],
        copyright: `©${new Date().getFullYear()} PingCAP. All Rights Reserved`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
