---
category: Components
type: General
title: Button
cover: https://gw.alipayobjects.com/zos/alicdn/fNUKzY1sk/Button.svg
---

To trigger an operation.

## When To Use

A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.

In Ant Design we provide 5 types of button.

- Primary button: indicate the main action, one primary button at most in one section.
- Default button: indicate a series of actions without priority.
- Dashed button: used for adding action commonly.
- Text button: used for the most secondary action.
- Link button: used for external links.

And 4 other properties additionally.

- `danger`: used for actions of risk, like deletion or authorization.
- `ghost`: used in situations with complex background, home pages usually.
- `disabled`: when actions are not available.
- `loading`: add loading spinner in button, avoiding multiple submits too.

## API

To get a customized button, just set `type`/`shape`/`size`/`loading`/`disabled`.

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| disabled | disabled state of button | boolean | `false` |  |
| ghost | make background transparent and invert text and border colors, added in 2.7 | boolean | false |  |
| htmlType | set the original html `type` of `button`, see: [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | string | `button` |  |
| icon | set the icon of button, see: Icon component | v-slot | - |  |
| loading | set the loading status of button | boolean \| { delay: number } | false |  |
| shape | can be set to `circle`, `round` or omitted | string | - |  |
| size | can be set to `small` `large` or omitted | string | `default` |  |
| type | can be set to `primary` `ghost` `dashed` `danger` `link` or omitted (meaning `default`) | string | `default` |  |
| block | option to fit button width to its parent width | boolean | `false` |  |

### events

| Events Name | Description                             | Arguments       | Version |
| ----------- | --------------------------------------- | --------------- | ------- |
| click       | set the handler to handle `click` event | (event) => void |         |

It accepts all props which native buttons support.

## FAQ

### How to remove space between 2 chinese characters

Use [ConfigProvider](/components/config-provider/#API) to set `autoInsertSpaceInButton` as `false`.
