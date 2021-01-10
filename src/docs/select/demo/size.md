<cn>
#### 三种大小
三种大小的选择框，当 size 分别为 `large` 和 `small` 时，输入框高度为 `40px` 和 `24px` ，默认高度为 `32px`。
</cn>

<us>
#### Sizes
The height of the input field for the select defaults to 32px. If size is set to large, the height will be 40px, and if set to small, 24px.
</us>

```vue
<template>
  <div>
    <a-radio-group v-model:value="size">
      <a-radio-button value="large">
        Large
      </a-radio-button>
      <a-radio-button value="default">
        Default
      </a-radio-button>
      <a-radio-button value="small">
        Small
      </a-radio-button>
    </a-radio-group>
    <br /><br />
    <a-select :size="size" v-model:value="value1" style="width: 200px">
      <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
        {{ (i + 9).toString(36) + i }}
      </a-select-option>
    </a-select>
    <br />
    <a-select
      mode="multiple"
      :size="size"
      placeholder="Please select"
      v-model:value="value2"
      style="width: 200px"
      @popupScroll="popupScroll"
    >
      <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
        {{ (i + 9).toString(36) + i }}
      </a-select-option>
    </a-select>
    <br />
    <a-select
      mode="tags"
      :size="size"
      placeholder="Please select"
      v-model:value="value3"
      style="width: 200px"
    >
      <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
        {{ (i + 9).toString(36) + i }}
      </a-select-option>
    </a-select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      size: 'default',
      value1: 'a1',
      value2: ['a1', 'b2'],
      value3: ['a1', 'b2'],
    };
  },
  methods: {
    popupScroll() {
      console.log('popupScroll');
    },
  },
};
</script>
```
