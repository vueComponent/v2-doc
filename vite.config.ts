import path from 'path'
import vue from "@vitejs/plugin-vue";
import md from "./plugin/md";

/**
 * @type {import('vite').UserConfig}
 */
export default {
  // alias: [{
  //   find: '@',
  //   replacement: path.join(__dirname, './src'),
  // }],
  plugins: [
    md(),
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
  ],
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
