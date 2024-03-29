---
category: Components
type: Data Entry
title: DatePicker
cover: https://gw.alipayobjects.com/zos/alicdn/RT_USzA48/DatePicker.svg
---

## API

There are four kinds of picker:

- DatePicker
- MonthPicker
- RangePicker
- WeekPicker

### Localization

The default locale is en-US, if you need to use other languages, recommend to use internationalized components provided by us at the entrance. Look at: [ConfigProvider](/components/config-provider/).

If there are special needs (only modifying single component language), Please use the property: local. Example: [default](https://github.com/vueComponent/ant-design-vue/blob/next/components/date-picker/locale/example.json).

```html
<template>
  <a-date-picker v-model:value="value" :locale="locale" />
</template>
<script>
  import locale from 'ant-design-vue/es/date-picker/locale/zh_CN';
  import { defineComponent } from 'vue';
  export default defineComponent({
    setup() {
      return {
        locale,
        value: null,
      };
    },
  });
</script>
```

**Note:** Part of locale of DatePicker, MonthPicker, RangePicker, WeekPicker is read from value. So, please set the locale of moment correctly.

```html
<template>
  <a-date-picker v-model:value="value" />
</template>
<script>
  // The default locale is en-US, if you want to use other locale, just set locale in entry file globally.
  import moment from 'moment';
  import 'moment/dist/locale/zh-cn';
  import { defineComponent } from 'vue';
  export default defineComponent({
    setup() {
      return {
        value: moment('2015-01-01', 'YYYY-MM-DD')
        moment,
      };
    },
  });
</script>
```

### Common API

The following APIs are shared by DatePicker, MonthPicker, RangePicker, WeekPicker.

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- | --- | --- | --- |
| allowClear | Whether to show clear button | boolean | true |  |
| autofocus | get focus when component mounted | boolean | false |  |
| dateRender | custom rendering function for date cells by setting a slot | #dateRender="{current, today}" | - |  |
| disabled | determine whether the DatePicker is disabled | boolean | false |  |
| disabledDate | specify the date that cannot be selected | (currentDate: moment) => boolean | - |  |
| getCalendarContainer | to set the container of the floating layer, while the default is to create a `div` element in `body` | function(trigger) | - |  |
| locale | localization configuration | object | [default](https://github.com/vueComponent/ant-design-vue/blob/next/components/date-picker/locale/example.json) |  |
| mode | picker panel mode | `time | date | month | year` | 'date' |  |
| open | open state of picker | boolean | - |  |
| placeholder | placeholder of date input | string\|RangePicker\[] | - |  |
| popupStyle | to customize the style of the popup calendar | CSSProperties | {} |  |
| dropdownClassName | to customize the class of the popup calendar | string | - |  |
| size | determine the size of the input box, the height of `large` and `small`, are 40px and 24px respectively, while default size is 32px | string | - |  |
| suffixIcon | The custom suffix icon | VNode \| slot | - |  |
| inputReadOnly | Set the readonly attribute of the input tag (avoids virtual keyboard on touch devices) | boolean | - | 1.5.4 |
| align | this value will be merged into placement's config, please refer to the settings [dom-align](https://github.com/yiminghe/dom-align) | Object | - | 1.5.4 |
| valueFormat | optional, format of binding value. If not specified, the binding value will be a Date object | string，[date formats](https://momentjs.com/docs/#/displaying/format/) | - | 1.5.4 |

### Common Events

| Events Name | Description | Arguments | Version |
| --- | --- | --- | --- |
| openChange | a callback function, can be executed whether the popup calendar is popped up or closed | function(status) |  |
| panelChange | callback when picker panel mode is changed | function(value, mode) |  |

### Common Methods

| Name    | Description  | Version |
| ------- | ------------ | ------- |
| blur()  | remove focus |         |
| focus() | get focus    |         |

### DatePicker

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| defaultValue | to set default date | [moment](http://momentjs.com/) | - |  |
| defaultPickerValue | to set default picker date | [moment](http://momentjs.com/) | - |  |
| disabledTime | to specify the time that cannot be selected | function(date) | - |  |
| format | to set the date format, refer to [moment.js](http://momentjs.com/) | string | "YYYY-MM-DD" |  |
| renderExtraFooter | render extra footer in panel by setting a slot | #renderExtraFooter="mode" | - |  |
| showTime | to provide an additional time selection | object\|boolean | [TimePicker Options](/components/time-picker/#API) |  |
| showTime.defaultValue | to set default time of selected date | [moment](http://momentjs.com/) | moment() |  |
| showToday | whether to show "Today" button | boolean | true |  |
| value(v-model) | to set date | [moment](http://momentjs.com/) | - |  |

### DatePicker Events

| Events Name | Description | Arguments | Version |
| --- | --- | --- | --- |
| change | a callback function, can be executed when the selected time is changing | function(date: moment \| string, dateString: string) |  |
| ok | callback when click ok button | function(date: moment \| string) |  |

### MonthPicker

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| defaultValue | to set default date | [moment](http://momentjs.com/) | - |
| defaultPickerValue | to set default picker date | [moment](http://momentjs.com/) | - |  |
| format | to set the date format. When an array is provided, all values are used for parsing and first value for display. refer to [moment.js](http://momentjs.com/) | string \| string[] | "YYYY-MM" |  |
| monthCellContentRender | Custom month cell content render method by setting a slot | #monthCellContentRender="date, locale" | - |  |
| renderExtraFooter | render extra footer in panel by setting a slot | #renderExtraFooter="mode" | - |  |
| value(v-model) | to set date | [moment](http://momentjs.com/) | - |  |

### MonthPicker Events

| Events Name | Description | Arguments | Version |
| --- | --- | --- | --- |
| change | a callback function, can be executed when the selected time is changing | function(date: moment \| string, dateString: string) |  |

### WeekPicker

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| defaultValue | to set default date | [moment](http://momentjs.com/) | - |  |
| defaultPickerValue | to set default picker date | [moment](http://momentjs.com/) | - |  |
| format | to set the date format, refer to [moment.js](http://momentjs.com/) | string | "YYYY-wo" |  |
| value(v-model) | to set date | [moment](http://momentjs.com/) | - |  |
| renderExtraFooter | render extra footer in panel by setting a slot | #renderExtraFooter="mode" | - |  |

### WeekPicker Events

| Events Name | Description | Arguments | Version |
| --- | --- | --- | --- |
| change | a callback function, can be executed when the selected time is changing | function(date: moment \| string, dateString: string) |  |

### RangePicker

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- | --- |
| defaultValue | to set default date | [moment](http://momentjs.com/)\[] | - |  |
| defaultPickerValue | to set default picker date | [moment](http://momentjs.com/)\[] | - |  |
| disabledTime | to specify the time that cannot be selected | function(dates: \[moment, moment\], partial: `'start' | 'end'`) | - |  |
| format | to set the date format | string | "YYYY-MM-DD HH:mm:ss" |  |
| ranges | preseted ranges for quick selection | { \[range: string]: [moment](http://momentjs.com/)\[] } \| { \[range: string]: () => [moment](http://momentjs.com/)\[] } | - |  |
| renderExtraFooter | render extra footer in panel by setting a slot | #renderExtraFooter="mode" | - |  |
| separator | set separator between inputs | string | '~' | 1.5.0 |
| showTime | to provide an additional time selection | object\|boolean | [TimePicker Options](/components/time-picker/#API) |  |
| showTime.defaultValue | to set default time of selected date, [demo](#components-date-picker-demo-disabled-date) | [moment](http://momentjs.com/)\[] | \[moment(), moment()] |  |
| value(v-model) | to set date | \[[moment](http://momentjs.com/), [moment](http://momentjs.com/)] | - |  |

### RangePicker Events

| Events Name | Description | Arguments | Version |
| --- | --- | --- | --- |
| calendarChange | a callback function, can be executed when the start time or the end time of the range is changing | function(dates: \[moment, moment\] \| \[string, string\], dateStrings: \[string, string\]) |  |
| change | a callback function, can be executed when the selected time is changing | function(dates: \[moment, moment\] \| \[string, string\], dateStrings: \[string, string\]) |  |
| ok | callback when click ok button | function(dates: \[moment, moment\] \| \[string, string\]) |  |
