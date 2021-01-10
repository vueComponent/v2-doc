import path from 'path'
import vue from "@vitejs/plugin-vue";
import md from "./plugin/md";
import vueJsx from '@vitejs/plugin-vue-jsx'

/**
 * @type {import('vite').UserConfig}
 */
export default {
  // alias: [{
  //   find: '@',
  //   replacement: path.join(__dirname, './src'),
  // }],
  plugins: [
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
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
      'ant-design-vue/es/_util/store'
    ]
  },
  css: {
    preprocessorOptions: {
      less: {
        lessOptions: {
          modifyVars: {},
          javascriptEnabled: true,
        },
      }
    }
  }
};
