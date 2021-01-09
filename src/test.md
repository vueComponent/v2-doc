---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

最简单的用法。

## en-US

The simplest usage.

```vue
<template>
  <h1>hello</h1>
</template>

<script>
import { defineProps, reactive } from "vue";

const state = reactive({ count: 0 });
export default {};
</script>

<style>
a {
  color: #42b983;
}
</style>
```
