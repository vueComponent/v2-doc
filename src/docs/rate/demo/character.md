<cn>
#### 其他字符
可以将星星替换为其他字符，比如字母，数字，字体图标甚至中文。
</cn>

<us>
#### Other Character
Replace the default star to other character like alphabet, digit, iconfont or even Chinese word.
</us>

```vue
<template>
  <div>
    <a-rate v-model:value="value1" allowHalf>
      <template #character><heart-outlined /></template>
    </a-rate>
    <br />
    <a-rate v-model:value="value2" character="A" allow-half style="fontSize: 36px" />
    <br />
    <a-rate v-model:value="value3" character="好" allow-half />
    <br />
  </div>
</template>
<script>
import { HeartOutlined } from '@ant-design/icons-vue';
export default {
  data() {
    return {
      value1: 2,
      value2: 2.5,
      value3: 0.5,
    };
  },
  components: {
    HeartOutlined,
  },
};
</script>
```
