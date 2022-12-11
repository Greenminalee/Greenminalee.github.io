// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        href: '/img/duck.png',
      },
    },
  ],

  title: 'samin',
  tagline: '배운것, 구현한것, 생각을 기록합니다',
  url: '/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/duck.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Greenminalee', // Usually your GitHub org/user name.
  projectName: 'Greenminalee.github.io', // Usually your repo name.
  trailingSlash: false,
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Greenminalee/blog/tree/main/my-website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Greenminalee/blog/tree/main/my-website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    (
      {
      navbar: {
        hideOnScroll: true,
        title: 'samin',
        logo: {
          alt: 'hello wolrd',
          src: 'img/duck.png'
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            label: '기술정리',
            position: 'left',
          },
          {
            to: '/blog', 
            label: '생각정리', 
            position: 'left'
          },
          {
            href: 'https://github.com/Greenminalee/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: 
        {
          alt: 'Meta Open Source Logo',
          src: 'img/duck.png',
          href: 'https://naver.com',
          width: 50,
          height: 50,
        },
  
        // links: [
        //   {
        //     title: '깃허브',
        //     items: [
        //       {
        //         label: 'Git',
        //         to: 'https://github.com/Greenminalee',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} samin`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    
};

module.exports = config;
