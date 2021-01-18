import Layout from '../layouts/index.vue';
// import Iframe from '../components/iframe.jsx';
import demoRoutes from './demoRoutes';
// import otherRoutes from './otherRoutes';
import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  // ...otherRoutes,
  {
    path: '/components',
    component: Layout,
    props: route => {
      const name = route.path.split('/components/')[1].split('/')[0];
      return { name, showDemo: true };
    },
    children: [
      {
        path: 'overview:lang(.*)',
        component: () => import('../docs/avatar/demo/index.vue'),
      },
      ...demoRoutes,
    ],
  },
  // {
  //   path: '/iframe',
  //   component: Iframe,
  //   children: demoRoutes.map(item => ({
  //     ...item,
  //     props: route => {
  //       const hash = route.hash.replace('#', '');
  //       return { iframeName: hash };
  //     },
  //   })),
  // },
  {
    path: '/docs',
    component: Layout,
    // props: route => {
    //   const name = route.path.split('/docs/vue/')[1].split('/')[0];
    //   return { name, showApi: true };
    // },
    children: [
      {
        path: 'vue/introduce:lang(.*)',
        meta: { enTitle: 'Ant Design of Vue', title: 'Ant Design of Vue', category: 'docs' },
        component: () => import('../vueDocs/introduce.zh-CN.md'),
      },
      {
        path: 'vue/getting-started:lang(.*)',
        meta: { enTitle: 'Getting Started', title: '快速上手', category: 'docs' },
        component: () => import('../vueDocs/getting-started.zh-CN.md'),
      },
      {
        path: 'vue/customize-theme:lang(.*)',
        meta: { enTitle: 'Customize Theme', title: '定制主题', category: 'docs' },
        component: () => import('../vueDocs/customize-theme.zh-CN.md'),
      },
      {
        path: 'vue/migration-v2:lang(.*)',
        meta: { enTitle: 'V1 to V2', title: '从 v1 到 v2', category: 'docs' },
        component: () => import('../vueDocs/migration-v2.zh-CN.md'),
      },
      {
        path: 'vue/i18n:lang(.*)',
        meta: { enTitle: 'Internationalization', title: '国际化', category: 'docs' },
        component: () => import('../vueDocs/i18n.zh-CN.md'),
      },
      {
        path: 'vue/faq:lang(.*)',
        meta: { enTitle: 'FAQ', title: '常见问题', category: 'docs' },
        component: () => import('../vueDocs/faq.zh-CN.md'),
      },
      {
        path: 'vue/download:lang(.*)',
        meta: { enTitle: 'Download Design Resources', title: '下载设计资源', category: 'docs' },
        component: () => import('../vueDocs/download.zh-CN.md'),
      },
      {
        path: 'vue/sponsor:lang(.*)',
        meta: { enTitle: 'Sponsor', title: '支持我们', category: 'docs' },
        component: () => import('../vueDocs/sponsor.zh-CN.md'),
      },

      // {
      //   path: 'vue/changelog:lang(.*)',
      //   meta: {enTitle: 'Change Log', title: '更新日志'},
      //   component: () => import('../../CHANGELOG.zh-CN.md'),
      // },
      { path: '', redirect: '/docs/vue/introduce-cn/' },
    ],
  },
  { path: '/:lang(.*)', redirect: '/docs/vue/introduce-cn/' },
];

export default createRouter({
  history: createWebHistory(),
  fallback: false,
  routes,
});
