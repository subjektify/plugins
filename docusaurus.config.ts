import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Subjektify Plugins',
  tagline: 'Supercharge your dApps with modular plugins',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://plugins.subjektify.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'subjektify', // Usually your GitHub org/user name.
  projectName: 'plugins', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-card.jpg',
    navbar: {
      title: 'Plugins',
      logo: {
        alt: 'Subjektify Plugins',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/subjektify', label: 'Subjektify', position: 'left'},
        {to: '/composer', label: 'Composer', position: 'left'},
        {
          href: 'https://github.com/subjektify/plugins',
          position: 'right',
          className: "header-github-link",
          "aria-label": "GitHub"
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Plugins',
          items: [
            {
              label: 'Subjektify Plugins',
              to: '/subjektify',
            },
            {
              label: 'Composer Plugins',
              to: '/composer',
            },
          ],
        },
        {
          title: 'Documentation',
          items: [
            {
              label: 'Learn',
              href: 'https://subjektify.dev/docs/learn',
            },
            {
              label: 'Reference',
              href: 'https://subjektify.dev/docs/reference',
            },
            {
              label: 'Blog',
              href: 'https://subjektify.dev/blog',
            },
          ],
        },
        {
          title: 'Quick Links',
          items: [
            {
              label: 'Subjektify',
              href: 'https://subjektify.dev',
            },
            {
              label: 'Blueprints',
              href: 'https://blueprints.subjektify.dev',
            },
            {
              label: 'Subject Universe',
              href: 'https://universe.subjektify.dev',
            },
            {
              label: 'Subject Composer',
              href: 'https://composer.subjektify.dev',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/subjektify',
            },
            {
              label: 'Reddit',
              href: 'https://www.reddit.com/r/Subjektify',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/subjektify/plugins',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Subjektify Labs.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
