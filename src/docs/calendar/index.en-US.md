---
category: Components
type: Data Display
title: Calendar
cover: https://gw.alipayobjects.com/zos/antfincdn/dPQmLq08DI/Calendar.svg
---

Container for displaying data in calendar form.

## When To Use

When data is in the form of dates, such as schedules, timetables, prices calendar, lunar calendar. This component also supports Year/Month switch.

## API

**Note:** Part of the Calendar's locale is read from `value`. So, please set the locale of `moment` correctly.

```html
// The default locale is en-US, if you want to use other locale, just set locale in entry file
globally. // import moment from 'moment'; // import 'moment/dist/locale/zh-cn'; //
moment.locale('zh-cn');

<a-calendar v-model:value @panelChange="onPanelChange" @select="onSelect"></a-calendar>
```

customize the progress dot by setting a scoped slot

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| dateCellRender | Customize the display of the date cell by setting a scoped slot, the returned content will be appended to the cell | function(object: {current: moment}) | - |  |
| dateFullCellRender | Customize the display of the date cell by setting a scoped slot, the returned content will override the cell | function(object: {current: moment}) | - |  |
| defaultValue | The date selected by default | [moment](http://momentjs.com/) | default date |  |
| disabledDate | Function that specifies the dates that cannot be selected | (currentDate: moment) => boolean | - |
| fullscreen | Whether to display in full-screen | boolean | `true` |  |
| locale | The calendar's locale | object | [default](https://github.com/vueComponent/ant-design-vue/blob/next/components/date-picker/locale/example.json) |  |
| mode | The display mode of the calendar | `month` \| `year` | `month` |  |
| monthCellRender | Customize the display of the month cell by setting a scoped slot, the returned content will be appended to the cell | function(object: {current: moment}) | - |  |
| monthFullCellRender | Customize the display of the month cell by setting a scoped slot, the returned content will override the cell | function(object: {current: moment}) | - |  |
| validRange | to set valid range | \[[moment](http://momentjs.com/), [moment](http://momentjs.com/)] | - |  |
| value(v-model) | The current selected date | [moment](http://momentjs.com/) | current date |  |
| headerRender | render custom header in panel | function(object:{value: moment, type: string, onChange: f(), onTypeChange: f()}) \| v-slot | - | 1.5.0 |
| valueFormat | optional, format of binding value. If not specified, the binding value will be a Date object | string，[date formats](https://momentjs.com/docs/#/displaying/format/) | - | 1.5.4 |

### events

| Events Name | Description | Arguments | Version |
| --- | --- | --- | --- | --- |
| panelChange | Callback for when panel changes | function(date: moment \| string, mode: string) | - |  |
| select | Callback for when a date is selected | function(date: moment \| string） | - |  |
| change | Callback for when value change | function(date: moment \| string） | - |  |
