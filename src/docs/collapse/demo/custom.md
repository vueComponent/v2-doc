<cn>
#### 自定义面板
自定义各个面板的背景色、圆角、边距和图标。
</cn>

<us>
#### Custom Panel
Customize the background, border and margin styles and icon for each panel.
</us>

```vue
<template>
  <a-collapse v-model:activeKey="activeKey" :bordered="false">
    <template #expandIcon="{ isActive }">
      <caret-right-outlined :rotate="isActive ? 90 : 0" />
    </template>
    <a-collapse-panel key="1" header="This is panel header 1" :style="customStyle">
      <p>{{ text }}</p>
    </a-collapse-panel>
    <a-collapse-panel key="2" header="This is panel header 2" :style="customStyle">
      <p>{{ text }}</p>
    </a-collapse-panel>
    <a-collapse-panel key="3" header="This is panel header 3" :style="customStyle">
      <p>{{ text }}</p>
    </a-collapse-panel>
  </a-collapse>
</template>
<script>
import { CaretRightOutlined } from '@ant-design/icons-vue';

export default {
  components: {
    CaretRightOutlined,
  },
  data() {
    return {
      activeKey: ['1'],
      text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
      customStyle:
        'background: #f7f7f7;border-radius: 4px;margin-bottom: 24px;border: 0;overflow: hidden',
    };
  },
};
</script>
```
