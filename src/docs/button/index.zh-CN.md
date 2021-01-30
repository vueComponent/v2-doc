---
category: Components
type: 通用
title: Button
subtitle: 按钮
cover: https://gw.alipayobjects.com/zos/alicdn/fNUKzY1sk/Button.svg
---

按钮用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

在 Ant Design Vue 中我们提供了五种按钮。

- 主按钮：用于主行动点，一个操作区域只能有一个主按钮。
- 默认按钮：用于没有主次之分的一组行动点。
- 虚线按钮：常用于添加操作。
- 文本按钮：用于最次级的行动点。
- 链接按钮：用于作为外链的行动点。

以及四种状态属性与上面配合使用。

- 危险：删除/移动/修改权限等危险操作，一般需要二次确认。
- 幽灵：用于背景色比较复杂的地方，常用在首页/产品页等展示场景。
- 禁用：行动点不可用的时候，一般需要文案解释。
- 加载中：用于异步操作等待反馈的时候，也可以避免多次提交。

## API

通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：`type` -> `shape` -> `size` -> `loading` -> `disabled`。

按钮的属性说明如下：

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| disabled | 按钮失效状态 | boolean | `false` |  |
| ghost | 幽灵属性，使按钮背景透明 | boolean | false |  |
| htmlType | 设置 `button` 原生的 `type` 值，可选值请参考 [HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | string | `button` |  |
| icon | 设置按钮的图标类型 | v-slot | - |  |
| loading | 设置按钮载入状态 | boolean \| { delay: number } | `false` |  |
| shape | 设置按钮形状，可选值为 `circle`、 `round` 或者不设 | string | - |  |
| size | 设置按钮大小，可选值为 `small` `large` 或者不设 | string | `default` |  |
| type | 设置按钮类型，可选值为 `primary` `dashed` `danger` `link` 或者不设 | string | `default` |  |
| block | 将按钮宽度调整为其父宽度的选项 | boolean | `false` |  |

### 事件

| 事件名称 | 说明             | 回调参数        | 版本 |
| -------- | ---------------- | --------------- | ---- |
| click    | 点击按钮时的回调 | (event) => void |      |

支持原生 button 的其他所有属性。

## FAQ

### 如何移除 2 个汉字之间的空格

设置 [ConfigProvider](/components/config-provider/#API) 的 `autoInsertSpaceInButton` 为 `false`。
