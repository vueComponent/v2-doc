<cn>
#### 更多
更多分页。
</cn>

<us>
#### more
Mode pages.
</us>

```vue
<template>
  <a-pagination v-model:current="current" :total="500" />
</template>
<script>
export default {
  data() {
    return {
      current: 6,
    };
  },
};
</script>
```
