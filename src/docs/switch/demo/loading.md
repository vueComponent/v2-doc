<cn>
#### 加载中
标识开关操作仍在执行中。
</cn>

<us>
#### Loading
Mark a pending state of switch.
</us>

```vue
<template>
  <div>
    <a-switch loading v-model:checked="checked1" />
    <br />
    <a-switch size="small" loading v-model:checked="checked2" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked1: true,
      checked2: false,
    };
  },
};
</script>
```
