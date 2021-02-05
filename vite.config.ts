import path from 'path';
import vue from '@vitejs/plugin-vue';
import md from './plugin/md';
import docs from './plugin/docs';
import vueJsx from '@vitejs/plugin-vue-jsx';

/**
 * @type {import('vite').UserConfig}
 */
export default {
  // alias: [{
  //   find: '@',
  //   replacement: path.join(__dirname, './src'),
  // }],
  alias: {
    // moment: 'moment/dist/moment.js',
    '@': path.join(__dirname, './src'),
    vue: 'vue/dist/vue.esm-bundler.js',
  },
  plugins: [
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    docs(),
    md(),
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
  ],
  optimizeDeps: {
    include: [
      'fetch-jsonp',
      'ant-design-vue/es/locale-provider/zh_CN',
      'ant-design-vue/es/locale/en_US',
      'ant-design-vue/es/locale/zh_CN',
      'ant-design-vue/es/locale-provider/default',
      'ant-design-vue/es/vc-drawer/src',
      'ant-design-vue/es/_util/store',
      '@ant-design/icons-vue',
      '@ant-design-vue/use',
      'lodash-es',
    ],
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {},
        javascriptEnabled: true,
        // includePaths: ["node_modules/"],
      },
    },
  },
};
