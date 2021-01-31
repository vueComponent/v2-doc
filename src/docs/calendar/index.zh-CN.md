---
category: Components
type: 数据展示
title: Calendar
subtitle: 日历
cover: https://gw.alipayobjects.com/zos/antfincdn/dPQmLq08DI/Calendar.svg
---

按照日历形式展示数据的容器。

## 何时使用

当数据是日期或按照日期划分时，例如日程、课表、价格日历等，农历等。目前支持年/月切换。

## API

**注意：**Calendar 部分 locale 是从 value 中读取，所以请先正确设置 moment 的 locale。

```html
// 默认语言为 en-US，所以如果需要使用其他语言，推荐在入口文件全局设置 locale // import moment from
'moment'; // import 'moment/dist/locale/zh-cn'; // moment.locale('zh-cn');

<a-calendar v-model:value="value" @panelChange="onPanelChange" @select="onSelect"></a-calendar>
```

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| dateCellRender | 作用域插槽，用来自定义渲染日期单元格，返回内容会被追加到单元格, | function(object: {current: moment}) | 无 |  |
| dateFullCellRender | 作用域插槽，自定义渲染日期单元格，返回内容覆盖单元格 | function(object: {current: moment}) | 无 |  |
| defaultValue | 默认展示的日期 | [moment](http://momentjs.com/) | 默认日期 |  |
| disabledDate | 不可选择的日期 | (currentDate: moment) => boolean | 无 |  |
| fullscreen | 是否全屏显示 | boolean | true |  |
| locale | 国际化配置 | object | [默认配置](https://github.com/vueComponent/ant-design-vue/blob/master/components/date-picker/locale/example.json) |  |
| mode | 初始模式，`month/year` | string | month |  |
| monthCellRender | 作用域插槽，自定义渲染月单元格，返回内容会被追加到单元格 | function(object: {current: moment}) | 无 |  |
| monthFullCellRender | 作用域插槽，自定义渲染月单元格，返回内容覆盖单元格 | function(object: {current: moment}) | 无 |  |
| validRange | 设置可以显示的日期 | \[[moment](http://momentjs.com/), [moment](http://momentjs.com/)] | 无 |  |
| value(v-model) | 展示日期 | [moment](http://momentjs.com/) | 当前日期 |  |
| headerRender | 自定义头部内容 | function(object:{value: moment, type: string, onChange: f(), onTypeChange: f()}) \| v-slot | - | 1.5.0 |
| valueFormat | 可选，绑定值的格式，对 value、defaultValue 起作用。不指定则绑定值为 moment 对象 | string，[具体格式](https://momentjs.com/docs/#/displaying/format/) | - | 1.5.4 |

### 事件

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- | --- |
| panelChange | 日期面板变化回调 | function(date: moment \| string, mode: string) | 无 |
| select | 点击选择日期回调 | function(date: moment \| string） | 无 |
| change | 日期变化时的回调, 面板变化有可能导致日期变化 | function(date: moment \| string） | 无 |
