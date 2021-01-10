<cn>
#### 图标
有图标的标签。
</cn>

<us>
#### Icon
The Tab with Icon.
</us>

```vue
<template>
  <a-tabs>
    <a-tab-pane key="1">
      <template #tab>
        <span>
          <apple-outlined />
          Tab 1
        </span>
      </template>
      Tab 1
    </a-tab-pane>
    <a-tab-pane key="2">
      <template #tab>
        <span>
          <android-outlined />
          Tab 2
        </span>
      </template>
      Tab 2
    </a-tab-pane>
  </a-tabs>
</template>
<script>
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons-vue';
export default {
  components: {
    AppleOutlined,
    AndroidOutlined,
  },
};
</script>
```
