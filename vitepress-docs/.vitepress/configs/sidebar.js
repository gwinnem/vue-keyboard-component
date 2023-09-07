export default {
  '/api/': getApiSidebar(),
  '/components/': getComponentsSidebar(),
  '/guide/': getGuideSidebar(),
};

function getApiSidebar() {
  return [
    {
      text: 'API',
      collapsible: false,
      items: [
        {
          text: `Keyboard layout's`,
          link: `/api/keyboard-layouts`,
        },
        {
          text: 'Interfaces',
          collapsible: true,
          collapsed: false,
          items: [
            {
              text: 'Layout',
              link: '/api/interfaces-layout',
            }
          ],
        },
        {
          text: 'Types',
          collapsible: true,
          collapsed: false,
          items: [
            {
              text: 'Layout',
              link: '/api/types-layout',
            },
          ],
        },
        {
          text: 'Enums',
          collapsible: true,
          collapsed: false,
          items: [
            {
              text: 'EGridItemEvent',
              link: '/api/enums',
            },
          ],
        }
      ],
    },
  ];
}

function getComponentsSidebar() {
  return [
    {
      text: 'Components',
      link: '/components/',
      items: [],
    },
    {
      text: 'Styling',
      items: [
        {
          text: 'Variables',
          link: '/components/css-variables',
        },
      ],
    },
  ];
}

function getGuideSidebar() {
  return [
    {
      text: 'Guide',
      items: [
        {
          text: 'Introduction',
          link: '/guide/introduction',
        },
        {
          text: 'Installation',
          link: '/guide/installation',
        },
        {
          text: 'Changelog',
          link: '/guide/changelog',
        },
        {
          text: 'Roadmap',
          link: '/guide/roadmap',
        },
      ],
    },
  ];
}
