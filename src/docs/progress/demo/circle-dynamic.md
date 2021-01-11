<cn>
#### 进度圈动态展示
会动的进度条才是好进度条。
</cn>

<us>
#### Dynamic circular progress bar
A dynamic progress bar is better.
</us>

```vue
<template>
  <div>
    <a-progress type="circle" :percent="percent" />
    <a-button-group>
      <a-button @click="decline">
        <template #icon><minus-outlined /></template>
      </a-button>
      <a-button @click="increase">
        <template #icon><plus-outlined /></template>
      </a-button>
    </a-button-group>
  </div>
</template>
<script>
import { MinusOutlined } from "@ant-design/icons-vue";
import { PlusOutlined } from "@ant-design/icons-vue";

export default {
  components: {
    MinusOutlined,
    PlusOutlined,
  },
  data() {
    return {
      percent: 0,
    };
  },
  methods: {
    increase() {
      let percent = this.percent + 10;
      if (percent > 100) {
        percent = 100;
      }
      this.percent = percent;
    },
    decline() {
      let percent = this.percent - 10;
      if (percent < 0) {
        percent = 0;
      }
      this.percent = percent;
    },
  },
};
</script>
```
