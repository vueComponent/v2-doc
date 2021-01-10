<cn>
#### 带移除图标
带移除图标的输入框，点击图标删除所有内容。
</cn>

<us>
#### With clear icon
Input type of password.
</us>

```vue
<template>
  <div>
    <a-input
      v-model:value="value1"
      placeholder="input with clear icon"
      allow-clear
      @change="onChange"
    />
    <br />
    <br />
    <a-textarea
      v-model:value="value2"
      placeholder="textarea with clear icon"
      allow-clear
      @change="onChange"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: '',
      value2: '',
    };
  },
  methods: {
    onChange(e) {
      console.log(e);
    },
  },
};
</script>
```
