---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

<cn>
#### 基本
最简单的用法。ddd
</cn>

<us>
#### basic
The simplest usage.
</us>

```vue
<template>
  <h1>hello</h1>
</template>

<script>
import { defineProps, reactive } from "vue";

const state = reactive({ count: 0 });
export default {};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
```
