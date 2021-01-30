<docs>
---
order: 1
title:
  zh-CN: 全选
  en-US: Check all
---

## zh-CN

在实现全选效果时，你可能会用到 `indeterminate` 属性

## en-US

The `indeterminate` property can help you to achieve a 'check all' effect.

</docs>

<template>
  <div :style="{ borderBottom: '1px solid #E9E9E9' }">
    <a-checkbox
      v-model:checked="checkAll"
      :indeterminate="indeterminate"
      @change="onCheckAllChange"
    >
      Check all
    </a-checkbox>
  </div>
  <br />
  <a-checkbox-group v-model:value="checkedList" :options="plainOptions" @change="onChange" />
</template>
<script>
import { defineComponent, reactive, toRefs } from 'vue';
const plainOptions = ['Apple', 'Pear', 'Orange'];
export default defineComponent({
  setup() {
    const state = reactive({
      indeterminate: false,
      checkAll: false,
      checkedList: ['Apple', 'Orange'],
    });
    const onChange = checkedList => {
      state.indeterminate = !!checkedList.length && checkedList.length < plainOptions.length;
      state.checkAll = checkedList.length === plainOptions.length;
    };

    const onCheckAllChange = e => {
      Object.assign(state, {
        checkedList: e.target.checked ? plainOptions : [],
        indeterminate: false,
      });
    };

    return {
      ...toRefs(state),
      onChange,
      plainOptions,
      onCheckAllChange,
    };
  },
});
</script>
