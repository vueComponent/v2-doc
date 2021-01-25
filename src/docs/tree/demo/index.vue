<template>
  <demo-sort>
    <basic />
    <basic-controlled />
    <draggable />
    <dynamic />
    <custom-icon />
    <search />
    <show-line />
    <directory />
    <switcher-icon />
    <replace-fields />
  </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue';
import BasicControlled from './basic-controlled.vue';
import Draggable from './draggable.vue';
import Dynamic from './dynamic.vue';
import Search from './search.vue';
import Line from './line.vue';
import CustomIcon from './customized-icon.vue';
import Directory from './directory.vue';
import SwitcherIcon from './switcher-icon.vue';
import ReplaceFields from './replaceFields.vue';
import CN from '../index.zh-CN.md';
import US from '../index.en-US.md';
import { defineComponent } from 'vue';

export default defineComponent({
  CN,
  US,
  components: {
    Basic,
    BasicControlled,
    Draggable,
    Dynamic,
    Search,
    ShowLine: Line,
    CustomIcon,
    Directory,
    SwitcherIcon,
    ReplaceFields,
  },
  setup() {
    return {};
  },
});
</script>
