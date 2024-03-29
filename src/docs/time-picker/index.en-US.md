---
category: Components
type: Data Entry
title: TimePicker
cover: https://gw.alipayobjects.com/zos/alicdn/h04Zsl98I/TimePicker.svg
---

To select/input a time.

## When To Use

By clicking the input box, you can select a time from a popup panel.

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| addon | some addon to timepicker panel bottom | slot \| slot-scope | - |  |
| allowClear | allow clearing text | boolean | true |  |
| autofocus | get focus when component mounted | boolean | false |  |
| clearText | clear tooltip of icon | string | clear |  |
| defaultOpenValue | default open panel value, used to set utcOffset,locale if value/defaultValue absent | [moment](http://momentjs.com/) | moment() |  |
| defaultValue | to set default time | [moment](http://momentjs.com/) | - |  |
| disabled | determine whether the TimePicker is disabled | boolean | false |  |
| disabledHours | to specify the hours that cannot be selected | function() | - |  |
| disabledMinutes | to specify the minutes that cannot be selected | function(selectedHour) | - |  |
| disabledSeconds | to specify the seconds that cannot be selected | function(selectedHour, selectedMinute) | - |  |
| format | to set the time format | string | "HH:mm:ss" |  |
| getPopupContainer | to set the container of the floating layer, while the default is to create a div element in body | function(trigger) | - |  |
| hideDisabledOptions | hide the options that can not be selected | boolean | false |  |
| hourStep | interval between hours in picker | number | 1 |  |
| inputReadOnly | Set the `readonly` attribute of the input tag (avoids virtual keyboard on touch devices) | boolean | false |  |
| minuteStep | interval between minutes in picker | number | 1 |  |
| open(v-model) | whether to popup panel | boolean | false |  |
| placeholder | display when there's no value | string | "Select a time" |  |
| popupClassName | className of panel | string | '' |  |
| popupStyle | style of panel | object | - |  |
| secondStep | interval between seconds in picker | number | 1 |  |
| suffixIcon | The custom suffix icon | string \| VNode \| slot | - |  |
| clearIcon | The custom clear icon | string \| VNode \| slot | - | 1.5.0 |
| use12Hours | display as 12 hours format, with default format `h:mm:ss a` | boolean | false |  |
| value(v-model) | to set time | [moment](http://momentjs.com/) | - |  |
| align | this value will be merged into placement's config, please refer to the settings [dom-align](https://github.com/yiminghe/dom-align) | Object | - | 1.5.4 |
| valueFormat | optional, format of binding value. If not specified, the binding value will be a Date object | string，[date formats](https://momentjs.com/docs/#/displaying/format/) | - | 1.5.4 |

### events

| Events Name | Description | Arguments |
| --- | --- | --- |
| change | a callback function, can be executed when the selected time is changing | function(time: moment \| string, timeString: string): void |
| openChange | a callback function which will be called while panel opening/closing | (open: boolean): void |

## Methods

| Name    | Description  |
| ------- | ------------ |
| blur()  | remove focus |
| focus() | get focus    |
