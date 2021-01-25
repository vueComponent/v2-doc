---
category: Components
type: 反馈
title: Skeleton
subtitle: 代码演示
cover: https://gw.alipayobjects.com/zos/alicdn/KpcciCJgv/Skeleton.svg
---

警告提示，展现需要关注的信息。

## 何时使用

- 当某个页面需要向用户显示警告的信息时。
- 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。

## API

### Skeleton

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| active | 是否展示动画效果 | boolean | false |
| avatar | 是否显示头像占位图 | boolean \| [SkeletonAvatarProps](#SkeletonAvatarProps) | false |
| loading | 为 `true` 时，显示占位图。反之则直接展示子组件 | boolean | - |
| paragraph | 是否显示段落占位图 | boolean \| [SkeletonParagraphProps](#SkeletonParagraphProps) | true |
| title | 是否显示标题占位图 | boolean \| [SkeletonTitleProps](#SkeletonTitleProps) | true |

### SkeletonAvatarProps

| 属性  | 说明                 | 类型                                          | 默认值 |
| ----- | -------------------- | --------------------------------------------- | ------ |
| size  | 设置头像占位图的大小 | number \| `large` \| `small` \| `default` | -      |
| shape | 指定头像的形状       | `circle` \| `square`                    | -      |

### SkeletonTitleProps

| 属性  | 说明                 | 类型             | 默认值 |
| ----- | -------------------- | ---------------- | ------ |
| width | 设置标题占位图的宽度 | number \| string | -      |

### SkeletonParagraphProps

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| rows | 设置段落占位图的行数 | number | - |
| width | 设置段落占位图的宽度，若为数组时则为对应的每行宽度，反之则是最后一行的宽度 | number \| string \| Array<number \| string> | - |
