<cn>
#### Checkbox组
方便的从数组生成checkbox
</cn>

<us>
#### Checkbox group
Generate a group of checkboxes from an array
</us>

```vue
<template>
  <a-checkbox-group v-model:value="value1" name="checkboxgroup" :options="plainOptions" />
  <br />
  <a-checkbox-group v-model:value="value2" :options="plainOptions" />
  <br />
  <a-checkbox-group v-model:value="value3" :options="options" :value="['Pear']" />
  <br />
  <a-checkbox-group v-model:value="value4" :options="optionsWithDisabled" disabled>
    <template #label="{ value }">
      <span style="color: red">{{ value }}</span>
    </template>
  </a-checkbox-group>
</template>
<script>
const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
  { value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];
export default {
  data() {
    return {
      plainOptions,
      options,
      optionsWithDisabled,
      value1: [],
      value2: ['Apple'],
      value3: ['Pear'],
      value4: ['Apple'],
    };
  },
};
</script>
```
