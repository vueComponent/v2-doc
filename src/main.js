// import 'ant-design-vue/dist/antd.less';
// import './index.less';
import 'nprogress/nprogress.css';
import { createApp, createVNode, Transition, TransitionGroup } from 'vue';
import i18n from './i18n';
import NProgress from 'nprogress';
import router from './router';
import Md from './components/md.vue';
import Api from './components/api.vue';
import Antd from 'ant-design-vue';
import demoBox from './components/DemoBox.vue';
import demoContainer from './components/demoContainer.vue';
import demoSort from './components/demoSort.jsx';
import store from './store/index.js';
import clipboard from './directives/clipboard';

const app = createApp({
  render() {
    return createVNode('router-view');
  },
});

app.use(Antd);
app.use(clipboard);
app.component('transition', Transition);
app.component('transition-group', TransitionGroup);
app.component(Md.name, Md);
app.component(Api.name, Api);
app.component('demo-box', demoBox);
app.component('demo-container', demoContainer);
app.component('demo-sort', demoSort);
app.component('VNodes', function(_, { attrs: { value } }) {
  return value;
});

// app.component('tempVar', {
//   functional: true,
//   render: (h, ctx) => {
//     return ctx.scopedSlots && ctx.scopedSlots.default && ctx.scopedSlots.default(ctx.props);
//   },
// });

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    NProgress.start();
  }
  next();
});

router.afterEach((to, from) => {
  if (to.path !== from.path) {
    NProgress.done();
    document.documentElement.scrollTop = 0;
  }
});

app.use(store);
app.use(router);
app.use(i18n);

app.config.globalProperties.$i18n = i18n;

app.mount('#app');
