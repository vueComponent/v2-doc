<cn>
#### 附加内容
在 TimePicker 选择框底部显示自定义的内容。
</cn>

<us>
#### Addon
Render addon contents to timepicker panel's bottom.
</us>

```vue
<template>
  <div>
    <a-time-picker :open="open" @openChange="handleOpenChange">
      <template #addon="{ prefixCls }">
        <a-button size="small" type="primary" @click="handleClose"> Ok {{ prefixCls }} </a-button>
      </template>
    </a-time-picker>
    <a-time-picker v-model:open="open2">
      <template #addon>
        <a-button size="small" type="primary" @click="handleClose">
          Ok
        </a-button>
      </template>
    </a-time-picker>
  </div>
</template>
<script>
export default {
  data() {
    return {
      open: false,
      open2: false,
    };
  },
  methods: {
    handleOpenChange(open) {
      console.log('open', open);
      this.open = open;
    },
    handleClose() {
      this.open = false;
      this.open2 = false;
    },
  },
};
</script>
```
