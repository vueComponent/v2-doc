---
category: Components
subtitle: 自动完成
type: 数据录入
cols: 2
title: AutoComplete
cover: https://gw.alipayobjects.com/zos/alicdn/qtJm4yt45/AutoComplete.svg
---

输入框自动完成功能。

## 何时使用

- 需要一个输入框而不是选择器。
- 需要输入建议/辅助提示。

和 Select 的区别是：

- AutoComplete 是一个带提示的文本输入框，用户可以自由输入，关键词是辅助**输入**。
- Select 是在限定的可选项中进行选择，关键词是**选择**。

## API

```html
<a-auto-complete v-model:value="value" :options="options" />
```

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowClear | 支持清除, 单选模式有效 | boolean | false |  |
| autofocus | 自动获取焦点 | boolean | false |  |
| backfill | 使用键盘选择选项的时候把选中项回填到输入框中 | boolean | false |  |
| #default (自定义输入框) | 自定义输入框 | HTMLInputElement / HTMLTextAreaElement | `<Input />` |  |
| options | 自动完成的数据源 | slot \| [DataSourceItemType](https://github.com/vueComponent/ant-design-vue/blob/724d53b907e577cf5880c1e6742d4c3f924f8f49/components/auto-complete/index.vue#L9)\[] |  |  |
| dropdownMenuStyle | dropdown 菜单自定义样式 | object |  | 1.5.0 |
| defaultActiveFirstOption | 是否默认高亮第一个选项。 | boolean | true |  |
| disabled | 是否禁用 | boolean | false |  |
| filterOption | 是否根据输入项进行筛选。当其为一个函数时，会接收 `inputValue` `option` 两个参数，当 `option` 符合筛选条件时，应返回 `true`，反之则返回 `false`。 | boolean or function(inputValue, option) | true |  |
| optionLabelProp | 回填到选择框的 Option 的属性值，默认是 Option 的子元素。比如在子元素需要高亮效果时，此值可以设为 `value`。 | string | `children` |  |
| placeholder | 输入框提示 | string \| slot | - |  |
| v-model:value | 指定当前选中的条目 | string\|string\[]\|{ key: string, label: string\|vNodes }\|Array&lt;{ key: string, label: string\|vNodes }> | 无 |  |
| defaultOpen | 是否默认展开下拉菜单 | boolean | - |  |
| open | 是否展开下拉菜单 | boolean | - |  |

### 事件

| 事件名称 | 说明 | 回调参数 | 版本 |
| --- | --- | --- | --- |
| change | 选中 option，或 input 的 value 变化时，调用此函数 | function(value) |
| blur | 失去焦点时的回调 | function() |
| focus | 获得焦点时的回调 | function() |
| search | 搜索补全项的时候调用 | function(value) |
| select | 被选中时调用，参数为选中项的 value 值 | function(value, option) |
| dropdownVisibleChange | 展开下拉菜单的回调 | function(open) |

## 方法

| 名称    | 描述     | 版本 |
| ------- | -------- | ---- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |
