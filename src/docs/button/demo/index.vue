<template>
  <div>
    <demo-sort>
      <basic />
      <disabled />
      <ghost />
      <icon />
      <loading />
      <multiple />
      <size />
      <block />
    </demo-sort>
  </div>
</template>
<script lang="ts">
import Basic from './basic.vue';
import Disabled from './disabled.vue';
import Ghost from './ghost.vue';
import Icon from './icon.vue';
import Loading from './loading.vue';
import Multiple from './multiple.vue';
import Size from './size.vue';
import Block from './block.vue';
import CN from '../index.zh-CN.md';
import US from '../index.en-US.md';
import { defineComponent } from 'vue';

export default defineComponent({
  // category: 'Components',
  // type: 'General',
  // zhType: '通用',
  // title: 'Button',
  // subtitle: '按钮',
  pageData: {
    cn: CN.pageData,
    us: US.pageData,
  },
  components: {
    Basic,
    Disabled,
    Ghost,
    Icon,
    Loading,
    Multiple,
    Size,
    Block,
  },
  setup() {
    return {};
  },
});
</script>
<style>
[id^='components-button-demo-'] .ant-btn {
  margin-right: 8px;
  margin-bottom: 12px;
}
[id^='components-button-demo-'] .ant-btn-rtl {
  margin-right: 0;
  margin-left: 8px;
}
[id^='components-button-demo-'] .ant-btn-group > .ant-btn,
[id^='components-button-demo-'] .ant-btn-group > span > .ant-btn {
  margin-right: 0;
}
[data-theme='dark'] .site-button-ghost-wrapper {
  background: rgba(255, 255, 255, 0.2);
}
</style>
