<cn>
#### 反向
设置 `reverse` 可以将滑动条置反。
</cn>

<us>
#### Reverse
Using `reverse` to render slider reversely.
</us>

```vue
<template>
  <div>
    <a-slider v-model:value="value1" :reverse="reverse" />
    <a-slider range v-model:value="value2" :reverse="reverse" />
    Reversed: <a-switch size="small" v-model:checked="reverse" @change="handleReverseChange" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: 30,
      value2: [20, 50],
      reverse: true,
    };
  },
  methods: {
    handleReverseChange(reverse) {
      this.reverse = reverse;
    },
  },
};
</script>
```
