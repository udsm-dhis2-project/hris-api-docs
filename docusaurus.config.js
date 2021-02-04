module.exports = {
  title: 'HRHIS',
  tagline: 'The tagline of HRHIS',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'src/img/favicon.png',
  organizationName: 'hisptz', // Usually your GitHub org/user name.
  projectName: 'hris-api-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'HRHIS',
      logo: {
        alt: 'HRHIS Logo',
        src: 'src/img/favicon.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Developer',
          position: 'left',
        },
        {to: 'blog', label: 'User', position: 'left'},
        {
          href: 'https://github.com/hisptz/hris-api-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'GitHub',
          items: [
            /*
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },*/
          ],
        },
        {
          title: 'Contact',
          items: [/*
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },*/
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} UDSM-DHIS2`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/hisptz/hris-api-docs/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/hisptz/hris-api-docs/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
