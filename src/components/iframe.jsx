// import * as AllDemo from '../demo'
import { provide } from 'vue';
export default {
  props: {
    name: String,
    hash: String,
  },

  created() {
    provide('demoContext', this);
  },
  render() {
    // const name = this.name
    // const titleMap = {}
    // for (const [title] of Object.entries(AllDemo)) {
    //   const key = `${title.replace(/(\B[A-Z])/g, '-$1').toLowerCase()}`
    //   titleMap[key] = title
    // }
    // const Demo = AllDemo[titleMap[name.replace(/-cn\/?$/, '')]]
    // const hash = this.$route.hash.replace('#', '')
    return (
      <div id="iframe-page">
        <router-view></router-view>
      </div>
    );
  },
};
