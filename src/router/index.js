import Layout from '../layouts/index.vue';
import Iframe from '../layouts/Iframe.vue';
// import Iframe from '../components/iframe.jsx';
import demoRoutes from './demoRoutes';
// import otherRoutes from './otherRoutes';
import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  // ...otherRoutes,
  {
    path: '/components',
    component: Layout,
    children: [
      {
        path: 'overview:lang(.*)',
        component: () => import('../views/ComponentOverview.vue'),
      },
      ...demoRoutes,
    ],
  },
  {
    path: '/iframe',
    component: Iframe,
    children: [
      {
        path: 'layout:lang(.*)',
        meta: {
          category: 'Components',
          subtitle: '布局',
          type: '布局',
          cols: 1,
          title: 'Layout',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/hzEndUVEx/Layout.svg',
        },
        props: route => {
          const hash = route.hash.replace('#', '');
          return { iframeName: hash };
        },
        component: () => import('../docs/layout/demo/index.vue'),
      },
    ],
  },
  {
    path: '/docs',
    component: Layout,
    // props: route => {
    //   const name = route.path.split('/docs/vue/')[1].split('/')[0];
    //   return { name, showApi: true };
    // },
    children: [
      {
        path: 'vue/introduce-cn',
        meta: { enTitle: 'Ant Design of Vue', title: 'Ant Design of Vue', category: 'docs' },
        component: () => import('../vueDocs/introduce.zh-CN.md'),
      },
      {
        path: 'vue/introduce',
        meta: { enTitle: 'Ant Design of Vue', title: 'Ant Design of Vue', category: 'docs' },
        component: () => import('../vueDocs/introduce.en-US.md'),
      },
      {
        path: 'vue/getting-started-cn',
        meta: { enTitle: 'Getting Started', title: '快速上手', category: 'docs' },
        component: () => import('../vueDocs/getting-started.zh-CN.md'),
      },
      {
        path: 'vue/getting-started',
        meta: { enTitle: 'Getting Started', title: '快速上手', category: 'docs' },
        component: () => import('../vueDocs/getting-started.en-US.md'),
      },
      {
        path: 'vue/customize-theme-cn',
        meta: { enTitle: 'Customize Theme', title: '定制主题', category: 'docs' },
        component: () => import('../vueDocs/customize-theme.zh-CN.md'),
      },
      {
        path: 'vue/customize-theme',
        meta: { enTitle: 'Customize Theme', title: '定制主题', category: 'docs' },
        component: () => import('../vueDocs/customize-theme.en-US.md'),
      },
      {
        path: 'vue/migration-v2-cn',
        meta: { enTitle: 'V1 to V2', title: '从 v1 到 v2', category: 'docs' },
        component: () => import('../vueDocs/migration-v2.zh-CN.md'),
      },
      {
        path: 'vue/migration-v2',
        meta: { enTitle: 'V1 to V2', title: '从 v1 到 v2', category: 'docs' },
        component: () => import('../vueDocs/migration-v2.en-US.md'),
      },
      {
        path: 'vue/i18n-cn',
        meta: { enTitle: 'Internationalization', title: '国际化', category: 'docs' },
        component: () => import('../vueDocs/i18n.zh-CN.md'),
      },
      {
        path: 'vue/i18n',
        meta: { enTitle: 'Internationalization', title: '国际化', category: 'docs' },
        component: () => import('../vueDocs/i18n.en-US.md'),
      },
      {
        path: 'vue/faq-cn',
        meta: { enTitle: 'FAQ', title: '常见问题', category: 'docs' },
        component: () => import('../vueDocs/faq.zh-CN.md'),
      },
      {
        path: 'vue/faq',
        meta: { enTitle: 'FAQ', title: '常见问题', category: 'docs' },
        component: () => import('../vueDocs/faq.en-US.md'),
      },
      {
        path: 'vue/download-cn',
        meta: { enTitle: 'Download Design Resources', title: '下载设计资源', category: 'docs' },
        component: () => import('../vueDocs/download.zh-CN.md'),
      },
      {
        path: 'vue/download',
        meta: { enTitle: 'Download Design Resources', title: '下载设计资源', category: 'docs' },
        component: () => import('../vueDocs/download.en-US.md'),
      },
      {
        path: 'vue/sponsor-cn',
        meta: { enTitle: 'Sponsor', title: '支持我们', category: 'docs' },
        component: () => import('../vueDocs/sponsor.zh-CN.md'),
      },
      {
        path: 'vue/sponsor',
        meta: { enTitle: 'Sponsor', title: '支持我们', category: 'docs' },
        component: () => import('../vueDocs/sponsor.en-US.md'),
      },
      { path: '', redirect: '/docs/vue/introduce/' },
    ],
  },
  { path: '/:lang(.*)', redirect: '/components/overview/' },
];

export default createRouter({
  history: createWebHistory(),
  fallback: false,
  routes,
  scrollBehavior: to => {
    if (to.hash) {
      return { el: to.hash, top: 80, behavior: 'auto' };
    }
  },
});
