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
    component: () => import('../docs/card/demo/index.vue'),
  },

  {
    path: 'checkbox:lang(.*)',
    component: () => import('../docs/checkbox/demo/index.vue'),
  },

  {
    path: 'grid:lang(.*)',
    component: () => import('../docs/grid/demo/index.vue'),
  },

  // {
  //   path: 'icon:lang(.*)',
  //   component: () => import('../docs/icon/demo/index.vue'),
  // },

  {
    path: 'input:lang(.*)',
    component: () => import('../docs/input/demo/index.vue'),
  },

  {
    path: 'mentions:lang(.*)',
    component: () => import('../docs/mentions/demo/index.vue'),
  },

  {
    path: 'select:lang(.*)',
    component: () => import('../docs/select/demo/index.vue'),
  },

  {
    path: 'menu:lang(.*)',
    component: () => import('../docs/menu/demo/index.vue'),
  },

  {
    path: 'pagination:lang(.*)',
    component: () => import('../docs/pagination/demo/index.vue'),
  },

  {
    path: 'popconfirm:lang(.*)',
    component: () => import('../docs/popconfirm/demo/index.vue'),
  },

  {
    path: 'popover:lang(.*)',
    component: () => import('../docs/popover/demo/index.vue'),
  },

  {
    path: 'radio:lang(.*)',
    component: () => import('../docs/radio/demo/index.vue'),
  },

  {
    path: 'rate:lang(.*)',
    component: () => import('../docs/rate/demo/index.vue'),
  },

  {
    path: 'tabs:lang(.*)',
    component: () => import('../docs/tabs/demo/index.vue'),
  },

  {
    path: 'tag:lang(.*)',
    component: () => import('../docs/tag/demo/index.vue'),
  },
  {
    path: 'tooltip:lang(.*)',
    component: () => import('../docs/tooltip/demo/index.vue'),
  },

  {
    path: 'dropdown:lang(.*)',
    component: () => import('../docs/dropdown/demo/index.vue'),
  },
  {
    path: 'divider:lang(.*)',
    component: () => import('../docs/divider/demo/index.vue'),
  },
  {
    path: 'collapse:lang(.*)',
    component: () => import('../docs/collapse/demo/index.vue'),
  },
  {
    path: 'notification:lang(.*)',
    component: () => import('../docs/notification/demo/index.vue'),
  },
  {
    path: 'message:lang(.*)',
    component: () => import('../docs/message/demo/index.vue'),
  },
  {
    path: 'spin:lang(.*)',
    component: () => import('../docs/spin/demo/index.vue'),
  },
  {
    path: 'switch:lang(.*)',
    component: () => import('../docs/switch/demo/index.vue'),
  },
  {
    path: 'auto-complete:lang(.*)',
    meta: {
      category: 'Components',
      subtitle: '自动完成',
      type: '数据录入',
      cols: '2',
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
    component: () => import('../docs/time-picker/demo/index.vue'),
  },
  {
    path: 'steps:lang(.*)',
    component: () => import('../docs/steps/demo/index.vue'),
  },
  {
    path: 'calendar:lang(.*)',
    component: () => import('../docs/calendar/demo/index.vue'),
  },
  {
    path: 'date-picker:lang(.*)',
    component: () => import('../docs/date-picker/demo/index.vue'),
  },

  {
    path: 'slider:lang(.*)',
    component: () => import('../docs/slider/demo/index.vue'),
  },

  {
    path: 'progress:lang(.*)',
    component: () => import('../docs/progress/demo/index.vue'),
  },
  {
    path: 'timeline:lang(.*)',
    component: () => import('../docs/timeline/demo/index.vue'),
  },
  {
    path: 'table:lang(.*)',
    component: () => import('../docs/table/demo/index.vue'),
  },
  {
    path: 'input-number:lang(.*)',
    component: () => import('../docs/input-number/demo/index.vue'),
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
    component: () => import('../docs/transfer/demo/index.vue'),
  },
  {
    path: 'upload:lang(.*)',
    component: () => import('../docs/upload/demo/index.vue'),
  },
  {
    path: 'tree:lang(.*)',
    component: () => import('../docs/tree/demo/index.vue'),
  },
  {
    path: 'tree-select:lang(.*)',
    component: () => import('../docs/tree-select/demo/index.vue'),
  },
  {
    path: 'layout:lang(.*)',
    component: () => import('../docs/layout/demo/index.vue'),
  },
  {
    path: 'form:lang(.*)',
    component: () => import('../docs/form/demo/index.vue'),
  },
  {
    path: 'anchor:lang(.*)',
    meta: {
      category: 'Components',
      subtitle: '锚点',
      cols: '2',
      type: '其他',
      title: 'Anchor',
      cover: 'https://gw.alipayobjects.com/zos/alicdn/_1-C1JwsC/Anchor.svg',
    },
    component: () => import('../docs/anchor/demo/index.vue'),
  },
  {
    path: 'list:lang(.*)',
    component: () => import('../docs/list/demo/index.vue'),
  },

  {
    path: 'carousel:lang(.*)',
    component: () => import('../docs/carousel/demo/index.vue'),
  },
  {
    path: 'drawer:lang(.*)',
    component: () => import('../docs/drawer/demo/index.vue'),
  },
  {
    path: 'skeleton:lang(.*)',
    component: () => import('../docs/skeleton/demo/index.vue'),
  },
  {
    path: 'comment:lang(.*)',
    component: () => import('../docs/comment/demo/index.vue'),
  },
  {
    path: 'config-provider:lang(.*)',
    component: () => import('../docs/config-provider/demo/index.vue'),
  },
  {
    path: 'empty:lang(.*)',
    component: () => import('../docs/empty/demo/index.vue'),
  },
  {
    path: 'result:lang(.*)',
    component: () => import('../docs/result/demo/index.vue'),
  },

  {
    path: 'descriptions:lang(.*)',
    component: () => import('../docs/descriptions/demo/index.vue'),
  },

  {
    path: 'page-header:lang(.*)',
    component: () => import('../docs/page-header/demo/index.vue'),
  },

  {
    path: 'space:lang(.*)',
    component: () => import('../docs/space/demo/index.vue'),
  },

  // {
  //   path: 'color-picker:lang(.*)',
  //   component: () => import('../docs/color-picker/demo/index.vue'),
  // },
];
