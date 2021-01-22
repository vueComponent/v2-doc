export default [
  {
    path: 'avatar:lang(.*)',
    meta: {
      category: 'Components',
      subtitle: '头像',
      type: '数据展示',
      title: 'Avatar',
      cover: 'https://gw.alipayobjects.com/zos/antfincdn/aBcnbw68hP/Avatar.svg',
    },
    component: () => import('../docs/avatar/demo/index.vue'),
  },
  {
    path: 'statistic:lang(.*)',
    meta: {
      category: 'Components',
      subtitle: '统计数值',
      type: '数据展示',
      title: 'Statistic',
      cover: 'https://gw.alipayobjects.com/zos/antfincdn/rcBNhLBrKbE/Statistic.svg',
    },
    component: () => import('../docs/statistic/demo/index.vue'),
  },

  {
    path: 'badge:lang(.*)',
    meta: {
      category: 'Components',
      subtitle: '徽标数',
      type: '数据展示',
      title: 'Badge',
      cover: 'https://gw.alipayobjects.com/zos/antfincdn/6%26GF9WHwvY/Badge.svg',
    },
    component: () => import('../docs/badge/demo/index.vue'),
  },

  {
    path: 'breadcrumb:lang(.*)',
    meta: {
      category: 'Components',
      subtitle: '面包屑',
      type: '导航',
      title: 'Breadcrumb',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/9Ltop8JwH/Breadcrumb.svg',
    },
    component: () => import('../docs/breadcrumb/demo/index.vue'),
  },

  {
    path: 'button:lang(.*)',
    meta: {
      category: 'Components',
      type: '通用',
      enType: 'General',
      title: 'Button',
      enTitle: 'Button',
      subtitle: '按钮',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/fNUKzY1sk/Button.svg',
    },
    component: () => import('../docs/button/demo/index.vue'),
  },

  {
    path: 'card:lang(.*)',
    meta: {
      category: 'Components',
      type: '数据展示',
      title: 'Card',
      subtitle: '卡片',
      cols: 1,
      cover: 'https://gw.alipayobjects.com/zos/antfincdn/NqXt8DJhky/Card.svg',
    },
    component: () => import('../docs/card/demo/index.vue'),
  },

  {
    path: 'checkbox:lang(.*)',
    meta: {
      category: 'Components',
      subtitle: '多选框',
      type: '数据录入',
      title: 'Checkbox',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/8nbVbHEm_/CheckBox.svg',
    },
    component: () => import('../docs/checkbox/demo/index.vue'),
  },

  {
    path: 'grid:lang(.*)',
    meta: {
      category: 'Components',
      subtitle: '栅格',
      type: '布局',
      cols: 1,
      title: 'Grid',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/5rWLU27so/Grid.svg',
    },
    component: () => import('../docs/grid/demo/index.vue'),
  },

  {
    path: 'icon:lang(.*)',
    meta: {
      category: 'Components',
      type: '通用',
      enType: 'General',
      title: 'Icon',
      enTitle: 'Icon',
      subtitle: '图标',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/rrwbSt3FQ/Icon.svg',
    },
    component: () => import('../docs/icon/demo/index.vue'),
  },

  {
    path: 'mentions:lang(.*)',
    meta: {
      category: 'Components',
      subtitle: '提及',
      type: '数据录入',
      title: 'Mentions',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/jPE-itMFM/Mentions.svg',
    },
    component: () => import('../docs/mentions/demo/index.vue'),
  },

  {
    path: 'select:lang(.*)',
    meta: {
      category: 'Components',
      subtitle: '选择器',
      type: '数据录入',
      title: 'Select',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/_0XzgOis7/Select.svg',
    },
    component: () => import('../docs/select/demo/index.vue'),
  },

  {
    path: 'menu:lang(.*)',
    meta: {
      category: 'Components',
      cols: 1,
      type: '导航',
      title: 'Menu',
      subtitle: '导航菜单',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/3XZcjGpvK/Menu.svg',
    },
    component: () => import('../docs/menu/demo/index.vue'),
  },

  {
    path: 'pagination:lang(.*)',
    meta: {
      category: 'Components',
      subtitle: '分页',
      type: '导航',
      title: 'Pagination',
      cols: 1,
      cover: 'https://gw.alipayobjects.com/zos/alicdn/1vqv2bj68/Pagination.svg',
    },
    component: () => import('../docs/pagination/demo/index.vue'),
  },

  {
    path: 'popconfirm:lang(.*)',
    meta: {
      category: 'Components',
      subtitle: '气泡确认框',
      type: '反馈',
      title: 'Popconfirm',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/fjMCD9xRq/Popconfirm.svg',
    },
    component: () => import('../docs/popconfirm/demo/index.vue'),
  },

  {
    path: 'popover:lang(.*)',
    meta: {
      category: 'Components',
      subtitle: '气泡卡片',
      type: '数据展示',
      title: 'Popover',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/1PNL1p_cO/Popover.svg',
    },
    component: () => import('../docs/popover/demo/index.vue'),
  },

  {
    path: 'radio:lang(.*)',
    meta: {
      category: 'Components',
      subtitle: '单选框',
      type: '数据录入',
      title: 'Radio',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/8cYb5seNB/Radio.svg',
    },
    component: () => import('../docs/radio/demo/index.vue'),
  },

  {
    path: 'rate:lang(.*)',
    meta: {
      category: 'Components',
      subtitle: '评分',
      type: '数据录入',
      title: 'Rate',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/R5uiIWmxe/Rate.svg',
    },
    component: () => import('../docs/rate/demo/index.vue'),
  },

  {
    path: 'tabs:lang(.*)',
    meta: {
      category: 'Components',
      subtitle: '标签页',
      type: '数据展示',
      title: 'Tabs',
      cols: 1,
      cover: 'https://gw.alipayobjects.com/zos/antfincdn/lkI2hNEDr2V/Tabs.svg',
    },
    component: () => import('../docs/tabs/demo/index.vue'),
  },

  {
    path: 'tag:lang(.*)',
    meta: {
      category: 'Components',
      subtitle: '标签',
      type: '数据展示',
      title: 'Tag',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/cH1BOLfxC/Tag.svg',
    },
    component: () => import('../docs/tag/demo/index.vue'),
  },
  {
    path: 'tooltip:lang(.*)',
    meta: {
      category: 'Components',
      subtitle: '文字提示',
      type: '数据展示',
      title: 'Tooltip',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/Vyyeu8jq2/Tooltp.svg',
    },
    component: () => import('../docs/tooltip/demo/index.vue'),
  },

  {
    path: 'dropdown:lang(.*)',
    meta: {
      category: 'Components',
      subtitle: '下拉菜单',
      type: '导航',
      title: 'Dropdown',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/eedWN59yJ/Dropdown.svg',
    },
    component: () => import('../docs/dropdown/demo/index.vue'),
  },
  {
    path: 'divider:lang(.*)',
    meta: {
      category: 'Components',
      type: '布局',
      title: 'Divider',
      subtitle: '分割线',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/5swjECahe/Divider.svg',
    },
    component: () => import('../docs/divider/demo/index.vue'),
  },
  {
    path: 'collapse:lang(.*)',
    meta: {
      category: 'Components',
      type: '数据展示',
      title: 'Collapse',
      subtitle: '折叠面板',
      cols: 1,
      cover: 'https://gw.alipayobjects.com/zos/alicdn/IxH16B9RD/Collapse.svg',
    },
    component: () => import('../docs/collapse/demo/index.vue'),
  },
  {
    path: 'notification:lang(.*)',
    meta: {
      category: 'Components',
      type: '反馈',
      noinstant: 'true',
      title: 'Notification',
      subtitle: '通知提醒框',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/Jxm5nw61w/Notification.svg',
    },
    component: () => import('../docs/notification/demo/index.vue'),
  },
  {
    path: 'message:lang(.*)',
    meta: {
      category: 'Components',
      subtitle: '全局提示',
      type: '反馈',
      noinstant: 'true',
      title: 'Message',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/hAkKTIW0K/Message.svg',
    },
    component: () => import('../docs/message/demo/index.vue'),
  },
  {
    path: 'spin:lang(.*)',
    meta: {
      category: 'Components',
      type: '反馈',
      title: 'Spin',
      subtitle: '加载中',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/LBcJqCPRv/Spin.svg',
    },
    component: () => import('../docs/spin/demo/index.vue'),
  },
  {
    path: 'switch:lang(.*)',
    meta: {
      category: 'Components',
      subtitle: '开关',
      type: '数据录入',
      title: 'Switch',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/zNdJQMhfm/Switch.svg',
    },
    component: () => import('../docs/switch/demo/index.vue'),
  },
  {
    path: 'auto-complete:lang(.*)',
    meta: {
      category: 'Components',
      subtitle: '自动完成',
      type: '数据录入',
      cols: 2,
      title: 'AutoComplete',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/qtJm4yt45/AutoComplete.svg',
    },
    component: () => import('../docs/auto-complete/demo/index.vue'),
  },
  {
    path: 'affix:lang(.*)',
    meta: {
      category: 'Components',
      subtitle: '固钉',
      type: '导航',
      title: 'Affix',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/tX6-md4H6/Affix.svg',
    },
    component: () => import('../docs/affix/demo/index.vue'),
  },
  {
    path: 'cascader:lang(.*)',
    meta: {
      category: 'Components',
      type: '数据录入',
      title: 'Cascader',
      subtitle: '级联选择',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/UdS8y8xyZ/Cascader.svg',
    },
    component: () => import('../docs/cascader/demo/index.vue'),
  },
  {
    path: 'back-top:lang(.*)',
    meta: {
      category: 'Components',
      type: '其他',
      subtitle: '回到顶部',
      title: 'BackTop',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/tJZ5jbTwX/BackTop.svg',
    },
    component: () => import('../docs/back-top/demo/index.vue'),
  },
  {
    path: 'modal:lang(.*)',
    meta: {
      type: '反馈',
      category: 'Components',
      subtitle: '对话框',
      title: 'Modal',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/3StSdUlSH/Modal.svg',
    },
    component: () => import('../docs/modal/demo/index.vue'),
  },
  {
    path: 'alert:lang(.*)',
    meta: {
      category: 'Components',
      subtitle: '警告提示',
      type: '反馈',
      title: 'Alert',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/8emPa3fjl/Alert.svg',
    },
    component: () => import('../docs/alert/demo/index.vue'),
  },
  {
    path: 'time-picker:lang(.*)',
    meta: {
      category: 'Components',
      subtitle: '时间选择框',
      type: '数据录入',
      title: 'TimePicker',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/h04Zsl98I/TimePicker.svg',
    },
    component: () => import('../docs/time-picker/demo/index.vue'),
  },
  {
    path: 'steps:lang(.*)',
    meta: {
      category: 'Components',
      subtitle: '步骤条',
      type: '导航',
      cols: 1,
      title: 'Steps',
      cover: 'https://gw.alipayobjects.com/zos/antfincdn/UZYqMizXHaj/Steps.svg',
    },
    component: () => import('../docs/steps/demo/index.vue'),
  },
  {
    path: 'calendar:lang(.*)',
    meta: {
      category: 'Components',
      type: '数据展示',
      subtitle: '日历',
      cols: 1,
      title: 'Calendar',
      cover: 'https://gw.alipayobjects.com/zos/antfincdn/dPQmLq08DI/Calendar.svg',
    },
    component: () => import('../docs/calendar/demo/index.vue'),
  },
  {
    path: 'date-picker:lang(.*)',
    meta: {
      category: 'Components',
      type: '数据录入',
      title: 'DatePicker',
      subtitle: '日期选择框',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/RT_USzA48/DatePicker.svg',
    },
    component: () => import('../docs/date-picker/demo/index.vue'),
  },

  {
    path: 'slider:lang(.*)',
    meta: {
      category: 'Components',
      subtitle: '滑动输入条',
      type: '数据录入',
      title: 'Slider',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/HZ3meFc6W/Silder.svg',
    },
    component: () => import('../docs/slider/demo/index.vue'),
  },

  {
    path: 'progress:lang(.*)',
    meta: {
      category: 'Components',
      subtitle: '进度条',
      type: '反馈',
      title: 'Progress',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/xqsDu4ZyR/Progress.svg',
    },
    component: () => import('../docs/progress/demo/index.vue'),
  },
  {
    path: 'timeline:lang(.*)',
    meta: {
      category: 'Components',
      subtitle: '时间轴',
      type: '数据展示',
      title: 'Timeline',
      cover: 'https://gw.alipayobjects.com/zos/antfincdn/vJmo00mmgR/Timeline.svg',
    },
    component: () => import('../docs/timeline/demo/index.vue'),
  },
  {
    path: 'table:lang(.*)',
    meta: {
      category: 'Components',
      cols: 1,
      type: '数据展示',
      title: 'Table',
      subtitle: '表格',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/f-SbcX2Lx/Table.svg',
    },
    component: () => import('../docs/table/demo/index.vue'),
  },

  {
    path: 'input-number:lang(.*)',
    meta: {
      category: 'Components',
      type: '数据录入',
      enType: 'Data Entry',
      title: 'InputNumber',
      enTitle: 'InputNumber',
      subtitle: '数字输入框',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/XOS8qZ0kU/InputNumber.svg',
    },
    component: () => import('../docs/input-number/demo/index.vue'),
  },

  {
    path: 'input:lang(.*)',
    meta: {
      category: 'Components',
      type: '数据录入',
      enType: 'Data Entry',
      title: 'Input',
      enTitle: 'Input',
      subtitle: '输入框',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/xS9YEJhfe/Input.svg',
    },
    component: () => import('../docs/input/demo/index.vue'),
  },

  {
    path: 'image:lang(.*)',
    meta: {
      category: 'Components',
      type: '数据展示',
      enType: 'Data Display',
      title: 'Image',
      enTitle: 'Image',
      subtitle: '图片',
      cover: 'https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg',
    },
    component: () => import('../docs/image/demo/index.vue'),
  },
  {
    path: 'transfer:lang(.*)',
    meta: {
      category: 'Components',
      subtitle: '穿梭框',
      type: '数据录入',
      cols: 1,
      title: 'Transfer',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/QAXskNI4G/Transfer.svg',
    },
    component: () => import('../docs/transfer/demo/index.vue'),
  },
  {
    path: 'upload:lang(.*)',
    meta: {
      category: 'Components',
      subtitle: '上传',
      type: '数据录入',
      title: 'Upload',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/QaeBt_ZMg/Upload.svg',
    },
    component: () => import('../docs/upload/demo/index.vue'),
  },
  {
    path: 'tree-select:lang(.*)',
    meta: {
      category: 'Components',
      subtitle: '树选择',
      type: '数据录入',
      title: 'TreeSelect',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/Ax4DA0njr/TreeSelect.svg',
    },
    component: () => import('../docs/tree-select/demo/index.vue'),
  },
  {
    path: 'tree:lang(.*)',
    meta: {
      category: 'Components',
      type: '数据展示',
      title: 'Tree',
      subtitle: '树形控件',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/Xh-oWqg9k/Tree.svg',
    },
    component: () => import('../docs/tree/demo/index.vue'),
  },
  {
    path: 'layout:lang(.*)',
    meta: {
      category: 'Components',
      subtitle: '布局',
      type: '布局',
      cols: 1,
      title: 'Layout',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/hzEndUVEx/Layout.svg',
    },
    component: () => import('../docs/layout/demo/index.vue'),
  },
  {
    path: 'form:lang(.*)',
    meta: {
      category: 'Components',
      subtitle: '表单',
      type: '数据录入',
      cols: 1,
      title: 'Form',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/ORmcdeaoO/Form.svg',
    },
    component: () => import('../docs/form/demo/index.vue'),
  },
  {
    path: 'anchor:lang(.*)',
    meta: {
      category: 'Components',
      subtitle: '锚点',
      cols: 2,
      type: '其他',
      title: 'Anchor',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/_1-C1JwsC/Anchor.svg',
    },
    component: () => import('../docs/anchor/demo/index.vue'),
  },
  {
    path: 'list:lang(.*)',
    meta: {
      category: 'Components',
      type: '数据展示',
      title: 'List',
      subtitle: '列表',
      cols: 1,
      cover: 'https://gw.alipayobjects.com/zos/alicdn/5FrZKStG_/List.svg',
    },
    component: () => import('../docs/list/demo/index.vue'),
  },

  {
    path: 'carousel:lang(.*)',
    meta: {
      category: 'Components',
      type: '数据展示',
      title: 'Carousel',
      subtitle: '走马灯',
      cover: 'https://gw.alipayobjects.com/zos/antfincdn/%24C9tmj978R/Carousel.svg',
    },
    component: () => import('../docs/carousel/demo/index.vue'),
  },
  {
    path: 'drawer:lang(.*)',
    meta: {
      type: '反馈',
      category: 'Components',
      subtitle: '抽屉',
      title: 'Drawer',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/7z8NJQhFb/Drawer.svg',
    },
    component: () => import('../docs/drawer/demo/index.vue'),
  },
  {
    path: 'skeleton:lang(.*)',
    meta: {
      category: 'Components',
      subtitle: '骨架屏',
      type: '反馈',
      title: 'Skeleton',
      cols: 1,
      cover: 'https://gw.alipayobjects.com/zos/alicdn/KpcciCJgv/Skeleton.svg',
    },
    component: () => import('../docs/skeleton/demo/index.vue'),
  },
  {
    path: 'comment:lang(.*)',
    meta: {
      category: 'Components',
      type: '数据展示',
      title: 'Comment',
      subtitle: '评论',
      cols: 1,
      cover: 'https://gw.alipayobjects.com/zos/alicdn/ILhxpGzBO/Comment.svg',
    },
    component: () => import('../docs/comment/demo/index.vue'),
  },
  {
    path: 'config-provider:lang(.*)',
    meta: {
      category: 'Components',
      subtitle: '全局化配置',
      cols: 1,
      type: '其他',
      title: 'ConfigProvider',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/kegYxl1wj/ConfigProvider.svg',
    },
    component: () => import('../docs/config-provider/demo/index.vue'),
  },
  {
    path: 'empty:lang(.*)',
    meta: {
      category: 'Components',
      subtitle: '空状态',
      type: '数据展示',
      title: 'Empty',
      cols: 1,
      cover: 'https://gw.alipayobjects.com/zos/alicdn/MNbKfLBVb/Empty.svg',
    },
    component: () => import('../docs/empty/demo/index.vue'),
  },
  {
    path: 'result:lang(.*)',
    meta: {
      type: '反馈',
      category: 'Components',
      title: 'Result',
      cols: 1,
      subtitle: '结果',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/9nepwjaLa/Result.svg',
    },
    component: () => import('../docs/result/demo/index.vue'),
  },

  {
    path: 'descriptions:lang(.*)',
    meta: {
      category: 'Components',
      subtitle: '描述列表',
      type: '数据展示',
      title: 'Descriptions',
      cols: 1,
      cover: 'https://gw.alipayobjects.com/zos/alicdn/MjtG9_FOI/Descriptions.svg',
    },
    component: () => import('../docs/descriptions/demo/index.vue'),
  },

  {
    path: 'page-header:lang(.*)',
    meta: {
      category: 'Components',
      type: '导航',
      title: 'PageHeader',
      cols: 1,
      subtitle: '页头',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/6bKE0Cq0R/PageHeader.svg',
    },
    component: () => import('../docs/page-header/demo/index.vue'),
  },

  {
    path: 'space:lang(.*)',
    meta: {
      category: 'Components',
      type: '布局',
      subtitle: '间距',
      title: 'Space',
      cols: 1,
      cover: 'https://gw.alipayobjects.com/zos/antfincdn/wc6%263gJ0Y8/Space.svg',
    },
    component: () => import('../docs/space/demo/index.vue'),
  },

  // {
  //   path: 'color-picker:lang(.*)',
  //   component: () => import('../docs/color-picker/demo/index.vue'),
  // },
];
