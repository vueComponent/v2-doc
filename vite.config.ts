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
    moment: 'moment/dist/moment.js',
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
      'ant-design-vue/es/locale-provider/zh_CN',
      'ant-design-vue/es/locale-provider/default',
      'ant-design-vue/es/vc-drawer/src',
      'ant-design-vue/es/_util/store',
      '@ant-design/icons-vue',
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
