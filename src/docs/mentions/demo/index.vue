<template>
  <demo-sort>
    <basic />
    <async />
    <prefix />
    <readonly />
    <placement />
  </demo-sort>
</template>
<script>
import Basic from './basic.vue';
import Async from './async.vue';
// // import Form from './form.md';
import Prefix from './prefix.vue';
import Readonly from './readonly.vue';
import Placement from './placement.vue';
import CN from '../index.zh-CN.md';
import US from '../index.en-US.md';
import { defineComponent } from 'vue';

export default defineComponent({
  CN,
  US,
  components: {
    Basic,
    Async,
    Prefix,
    Readonly,
    Placement,
  },
});
</script>
