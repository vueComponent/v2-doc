<cn>
#### 清除
支持允许或者禁用清除。
</cn>

<us>
#### Clear star
Support set allow to clear star when click again.
</us>

```vue
<template>
  <div>
    <a-rate v-model:value="value1" />
    <span class="ant-rate-text">allowClear: true</span>
    <br />
    <a-rate :allow-clear="false" v-model:value="value2" />
    <span class="ant-rate-text">allowClear: false</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: 3,
      value2: 3,
    };
  },
};
</script>
```
