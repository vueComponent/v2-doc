<cn>
#### 填底的按钮样式
实色填底的单选按钮样式。
</cn>

<us>
#### Solid radio button
Solid radio button style.
</us>

```vue
<template>
  <div>
    <div>
      <a-radio-group v-model:value="value1" button-style="solid">
        <a-radio-button value="a">
          Hangzhou
        </a-radio-button>
        <a-radio-button value="b">
          Shanghai
        </a-radio-button>
        <a-radio-button value="c">
          Beijing
        </a-radio-button>
        <a-radio-button value="d">
          Chengdu
        </a-radio-button>
      </a-radio-group>
    </div>
    <div :style="{ marginTop: '16px' }">
      <a-radio-group v-model:value="value2" button-style="solid">
        <a-radio-button value="a">
          Hangzhou
        </a-radio-button>
        <a-radio-button value="b" disabled>
          Shanghai
        </a-radio-button>
        <a-radio-button value="c">
          Beijing
        </a-radio-button>
        <a-radio-button value="d">
          Chengdu
        </a-radio-button>
      </a-radio-group>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: 'a',
      value2: 'c',
    };
  },
};
</script>
```
