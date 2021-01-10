<cn>
#### 自定义指示符
使用自定义指示符。
</cn>

<us>
#### Custom spinning indicator
Use custom loading indicator.
</us>

```vue
<template>
  <div>
    <a-spin>
      <loading-outlined slot="indicator" style="font-size: 24px" spin />
    </a-spin>
    <a-spin :indicator="indicator" />
  </div>
</template>
<script>
import { LoadingOutlined } from '@ant-design/icons-vue';
export default {
  components: {
    LoadingOutlined,
  },
  data() {
    return {
      indicator: <LoadingOutlined style="font-size: 24px" spin />,
    };
  },
};
</script>
```
