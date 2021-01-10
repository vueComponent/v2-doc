<cn>
#### 垂直
垂直方向的 Slider。
</cn>

<us>
#### Vertical
The vertical Slider.
</us>

```vue
<template>
  <div style="height: 300px">
    <div style="display: inline-block;height: 300px;marginLeft: 70px">
      <a-slider vertical v-model:value="value1" />
    </div>
    <div style="display: inline-block;height: 300px;marginLeft: 70px">
      <a-slider vertical range :step="10" v-model:value="value2" />
    </div>
    <div style="display: inline-block;height: 300px;marginLeft: 70px">
      <a-slider vertical range :marks="marks" v-model:value="value3" />
    </div>
  </div>
</template>
<script>
import { h } from 'vue';
export default {
  data() {
    return {
      value1: 30,
      value2: [20, 50],
      value3: [26, 37],
      marks: {
        0: '0°C',
        26: '26°C',
        37: '37°C',
        100: {
          style: {
            color: '#f50',
          },
          label: h('strong', '100°C'),
        },
      },
    };
  },
};
</script>
<style scoped>
.code-box-demo .ant-slider {
  margin-bottom: 16px;
}
</style>
```
