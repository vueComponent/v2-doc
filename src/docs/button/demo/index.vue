<template>
  <div>
    <Md :cn="md.cn" :us="md.us" />
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
    <api :us="US" :cn="CN"></api>
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
const md = {
  cn: `# Button 按钮
          按钮用于开始一个即时操作。
          ## 何时使用
          标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。
          ## 组件注册
          \`\`\`js
          import { Button } from 'ant-design-vue';
          app.use(Button);
          \`\`\`
          ## 代码演示`,
  us: `# Button
          To trigger an operation.
          ## When To Use
          A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.
          ## Component Registration
          \`\`\`js
          import { Button } from 'ant-design-vue';
          app.use(Button);
          \`\`\`
          ## Examples
          `,
};
export default defineComponent({
  category: 'Components',
  type: 'General',
  zhType: '通用',
  title: 'Button',
  subtitle: '按钮',
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
    return {
      md,
      CN,
      US,
    };
  },
});
</script>
<style>
[id^='components-button-demo-'] .ant-btn {
  margin-right: 8px;
  margin-bottom: 12px;
}
[id^='components-button-demo-'] .ant-btn-group > .ant-btn {
  margin-right: 0;
}
</style>
