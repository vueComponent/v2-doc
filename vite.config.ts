import vue from "@vitejs/plugin-vue";
import md from "./plugin/md";

/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [
    md(),
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
  ],
};
