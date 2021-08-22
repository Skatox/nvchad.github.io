const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "NvChad",
  tagline: "Neovim with lua is cool",
  url: "https://nvchat.netlify.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "NvChad", // Usually your GitHub org/user name.
  projectName: "NvChad", // Usually your repo name.
  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "NvChad",
      logo: {
        alt: "NvChad Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "getting-started/setup",
          position: "right",
          label: "Getting Started",
        },
        {
          to: "config",
          label: "Config",
          position: "right",
        },
        {
          to: "features",
          label: "Features",
          position: "right",
        },
        {
          href: "https://github.com/NvChad/NvChad",
          position: "right",
        },
      ],
    },
    prism: {
      lightTheme: require("prism-react-renderer/themes/duotoneDark"),
      darkTheme: require("prism-react-renderer/themes/duotoneDark"),
      additionalLanguages: ["lua"],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
}