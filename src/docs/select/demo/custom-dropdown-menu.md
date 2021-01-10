<cn>
#### 扩展菜单
使用 `dropdownRender` 对下拉菜单进行自由扩展。
</cn>

<us>
#### Custom dropdown
Customize the dropdown menu via `dropdownRender`.
</us>

```vue
<template>
  <a-select v-model:value="value" style="width: 120px">
    <template #dropdownRender="{ menuNode: menu }">
      <v-nodes :vnodes="menu" />
      <a-divider style="margin: 4px 0;" />
      <div
        style="padding: 4px 8px; cursor: pointer;"
        @mousedown="e => e.preventDefault()"
        @click="addItem"
      >
        <plus-outlined /> Add item
      </div>
    </template>
    <a-select-option v-for="item in items" :key="item" :value="item">
      {{ item }}
    </a-select-option>
  </a-select>
</template>
<script>
import { PlusOutlined } from '@ant-design/icons-vue';

let index = 0;
export default {
  components: {
    PlusOutlined,
    VNodes: (_, { attrs }) => {
      return attrs.vnodes;
    },
  },
  data: () => ({ items: ['jack', 'lucy'], value: 'lucy' }),
  methods: {
    addItem() {
      console.log('addItem');
      this.items.push(`New item ${index++}`);
    },
  },
};
</script>
```
