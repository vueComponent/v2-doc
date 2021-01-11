<template>
  <div>
    <Md :cn="md.cn" :us="md.us" />
    <demo-sort>
      <Basic />
      <ButtonGroup />
      <Disabled />
      <Ghost />
      <Icon />
      <Loading />
      <Multiple />
      <Size />
      <Block />
    </demo-sort>
    <api>
      <US />
      <CN v-slot:cn />
    </api>
  </div>
</template>
<script>
import Basic from "./basic.md";
import ButtonGroup from "./button-group.md";
import Disabled from "./disabled.md";
import Ghost from "./ghost.md";
import Icon from "./icon.md";
import Loading from "./loading.md";
import Multiple from "./multiple.md";
import Size from "./size.md";
import Block from "./block.md";
import CN from "../index.zh-CN.md";
import US from "../index.en-US.md";
console.log(CN);
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
export default {
  category: "Components",
  type: "General",
  zhType: "通用",
  title: "Button",
  subtitle: "按钮",
  components: {
    CN,
    US,
    Basic,
    ButtonGroup,
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
    };
  },
};
</script>
<style>
[id^="components-button-demo-"] .ant-btn {
  margin-right: 8px;
  margin-bottom: 12px;
}
[id^="components-button-demo-"] .ant-btn-group > .ant-btn {
  margin-right: 0;
}
</style>
