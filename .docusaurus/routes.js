import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/sigscalr-docs/__docusaurus/debug',
    component: ComponentCreator('/sigscalr-docs/__docusaurus/debug', '06f'),
    exact: true
  },
  {
    path: '/sigscalr-docs/__docusaurus/debug/config',
    component: ComponentCreator('/sigscalr-docs/__docusaurus/debug/config', '6bb'),
    exact: true
  },
  {
    path: '/sigscalr-docs/__docusaurus/debug/content',
    component: ComponentCreator('/sigscalr-docs/__docusaurus/debug/content', 'ff0'),
    exact: true
  },
  {
    path: '/sigscalr-docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/sigscalr-docs/__docusaurus/debug/globalData', '950'),
    exact: true
  },
  {
    path: '/sigscalr-docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/sigscalr-docs/__docusaurus/debug/metadata', 'd63'),
    exact: true
  },
  {
    path: '/sigscalr-docs/__docusaurus/debug/registry',
    component: ComponentCreator('/sigscalr-docs/__docusaurus/debug/registry', 'ca2'),
    exact: true
  },
  {
    path: '/sigscalr-docs/__docusaurus/debug/routes',
    component: ComponentCreator('/sigscalr-docs/__docusaurus/debug/routes', '850'),
    exact: true
  },
  {
    path: '/sigscalr-docs/markdown-page',
    component: ComponentCreator('/sigscalr-docs/markdown-page', 'fb9'),
    exact: true
  },
  {
    path: '/sigscalr-docs/',
    component: ComponentCreator('/sigscalr-docs/', '57b'),
    routes: [
      {
        path: '/sigscalr-docs/',
        component: ComponentCreator('/sigscalr-docs/', '7e0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/sigscalr-docs/data-management',
        component: ComponentCreator('/sigscalr-docs/data-management', '5da'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/sigscalr-docs/faq',
        component: ComponentCreator('/sigscalr-docs/faq', '1ad'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/sigscalr-docs/ingestion',
        component: ComponentCreator('/sigscalr-docs/ingestion', 'e84'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/sigscalr-docs/integrations',
        component: ComponentCreator('/sigscalr-docs/integrations', '2c8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/sigscalr-docs/query',
        component: ComponentCreator('/sigscalr-docs/query', '221'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
