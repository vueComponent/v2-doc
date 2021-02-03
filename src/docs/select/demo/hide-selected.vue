<docs>
---
order: 12
title:
  zh-CN: 隐藏已选择选项
  en-US: Hide Already Selected
---

## zh-CN

隐藏下拉列表中已选择的选项。

## en-US

Hide already selected options in the dropdown.

</docs>

<template>
  <a-select
    mode="multiple"
    placeholder="Inserted are removed"
    v-model:value="selectedItems"
    style="width: 100%"
  >
    <a-select-option v-for="item in filteredOptions" :key="item" :value="item">
      {{ item }}
    </a-select-option>
  </a-select>
</template>
<script>
import { computed, defineComponent, ref } from 'vue';

const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];
export default defineComponent({
  setup() {
    const selectedItems = ref([]);

    const filteredOptions = computed(() => OPTIONS.filter(o => !selectedItems.value.includes(o)));

    return {
      selectedItems,
      filteredOptions,
    };
  },
});
</script>
