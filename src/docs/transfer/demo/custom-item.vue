<docs>
---
order: 3
title:
  zh-CN: 自定义渲染行数据
  en-US: Custom datasource
---

## zh-CN

自定义渲染每一个 Transfer Item，可用于渲染复杂数据。

## en-US

Custom each Transfer Item, and in this way you can render a complex datasource.

</docs>

<template>
  <a-transfer
    :data-source="mockData"
    :list-style="{
      width: '300px',
      height: '300px',
    }"
    :target-keys="targetKeys"
    @change="handleChange"
  >
    <template #render="item">
      <span class="custom-item" style="color: red">{{ item.title }} - {{ item.description }}</span>
    </template>
  </a-transfer>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
interface MockData {
  key: string;
  title: string;
  description: string;
  chosen: boolean;
}
export default defineComponent({
  setup() {
    const mockData = ref<MockData[]>([]);

    const targetKeys = ref<string[]>([]);
    onMounted(() => {
      getMock();
    });
    const getMock = () => {
      const keys = [];
      const mData = [];
      for (let i = 0; i < 20; i++) {
        const data = {
          key: i.toString(),
          title: `content${i + 1}`,
          description: `description of content${i + 1}`,
          chosen: Math.random() * 2 > 1,
        };
        if (data.chosen) {
          keys.push(data.key);
        }
        mData.push(data);
      }
      mockData.value = mData;
      targetKeys.value = keys;
    };
    const handleChange = (keys: string[], direction: string, moveKeys: string[]) => {
      targetKeys.value = keys;
      console.log(keys, direction, moveKeys);
    };
    return {
      mockData,
      targetKeys,
      handleChange,
      getMock,
    };
  },
});
</script>
