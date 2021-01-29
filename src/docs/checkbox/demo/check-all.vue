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
const plainOptions = ['Apple', 'Pear', 'Orange'];
export default {
  data() {
    return {
      checkedList: ['Apple', 'Orange'],
      indeterminate: true,
      checkAll: false,
      plainOptions,
    };
  },
  methods: {
    onChange(checkedList) {
      this.indeterminate = !!checkedList.length && checkedList.length < plainOptions.length;
      this.checkAll = checkedList.length === plainOptions.length;
    },
    onCheckAllChange(e) {
      Object.assign(this, {
        checkedList: e.target.checked ? plainOptions : [],
        indeterminate: false,
      });
    },
  },
};
</script>
