<template>
  <demo-sort :cols="1">
    <Basic />
    <Accordion />
    <Mix />
    <Borderless />
    <Custom />
    <Noarrow />
    <Extra />
  </demo-sort>
</template>

<script>
import Accordion from './accordion.vue';
import Basic from './basic.vue';
import Borderless from './borderless.vue';
import Custom from './custom.vue';
import Mix from './mix.vue';
import Noarrow from './noarrow.vue';
import Extra from './extra.vue';
import CN from '../index.zh-CN.md';
import US from '../index.en-US.md';

export default {
  CN,
  US,
  components: {
    Accordion,
    Basic,
    Borderless,
    Custom,
    Mix,
    Noarrow,
    Extra,
  },
};
</script>
