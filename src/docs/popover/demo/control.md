<cn>
#### 从浮层内关闭
使用 `visible` 属性控制浮层显示。
</cn>

<us>
#### Controlling the close of the dialog
Use `visible` prop to control the display of the card.
</us>

```vue
<template>
  <a-popover v-model:visible="visible" title="Title" trigger="click">
    <template #content>
      <a @click="hide">Close</a>
    </template>
    <a-button type="primary">
      Click me
    </a-button>
  </a-popover>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    hide() {
      this.visible = false;
    },
  },
};
</script>
```
