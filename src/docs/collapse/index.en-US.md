---
category: Components
type: Data Display
title: Collapse
cover: https://gw.alipayobjects.com/zos/alicdn/IxH16B9RD/Collapse.svg
---

A content area which can be collapsed and expanded.

## When To Use

- Can be used to group or hide complex regions to keep the page clean.
- 'Accordion' is a special kind of 'Collapse', which allows only one panel to be expanded at a time.

## API

### Collapse

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| activeKey(v-model) | Key of the active panel | string\[]\|string | No default value. In `accordion` mode, it's the key of the first panel. |  |
| bordered | Toggles rendering of the border around the collapse block | boolean | `true` |  |
| accordion | If `true`, `Collapse` renders as `Accordion` | boolean | `false` |  |
| expandIcon | allow to customize collapse icon | Function(props):VNode \| slot="expandIcon" slot-scope="props"\|#expandIcon="props" |  |
| expandIconPosition | Set expand icon position: `left`, `right` | `left` | - | 1.5.0 |
| destroyInactivePanel | Destroy Inactive Panel | boolean | `false` |  |

### events

| Events Name | Description                                             | Arguments     | Version |
| ----------- | ------------------------------------------------------- | ------------- | ------- |
| change      | Callback function executed when active panel is changed | function(key) |         |

### Collapse.Panel

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| disabled | If `true`, panel cannot be opened or closed | boolean | `false` |  |
| forceRender | Forced render of content on panel, instead of lazy rending after clicking on header | boolean | `false` |  |
| header | Title of the panel | string | - |  |
| key | Unique key identifying the panel from among its siblings | string \| number | - |  |
| showArrow | If `false`, panel will not show arrow icon | boolean | `true` |  |
| extra | extra element in the corner | VNode \| slot | - | 1.5.0 |
