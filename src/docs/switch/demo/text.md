<cn>
#### 文字和图标
带有文字和图标。
</cn>

<us>
#### Text & icon
With text and icon.
</us>

```vue
<template>
  <div>
    <a-switch checked-children="开" un-checked-children="关" v-model:checked="checked1" />
    <br />
    <a-switch checked-children="1" un-checked-children="0" v-model:checked="checked2" />
    <br />
    <a-switch v-model:checked="checked3">
      <template #checkedChildren><check-outlined /></template>
      <template #unCheckedChildren><close-outlined /></template>
    </a-switch>
  </div>
</template>
<script>
import { CheckOutlined, CloseOutlined } from '@ant-design/icons-vue';

export default {
  data() {
    return {
      checked1: true,
      checked2: false,
      checked3: false,
    };
  },
  components: {
    CheckOutlined,
    CloseOutlined,
  },
};
</script>
```
