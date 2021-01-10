<cn>
#### 自定义 icon
自定义 icon。
</cn>

<us>
#### Custom icon
Custom icon.
</us>

```vue
<template>
  <a-result title="Great, we have done all the operations!">
    <template #icon>
      <smile-twoTone />
    </template>
    <template #extra>
      <a-button type="primary">
        Next
      </a-button>
    </template>
  </a-result>
</template>
<script>
import { SmileTwoTone } from '@ant-design/icons-vue';
export default {
  components: {
    SmileTwoTone,
  },
  data() {
    return {};
  },
};
</script>
```
