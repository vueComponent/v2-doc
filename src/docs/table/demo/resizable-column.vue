<cn>
#### 可伸缩列
集成 [vue-draggable-resizable](https://github.com/mauricius/vue-draggable-resizable) 来实现可伸缩列。
</cn>

<us>
#### Resizable column
Implement resizable column by integrate with [vue-draggable-resizable](https://github.com/mauricius/vue-draggable-resizable).
</us>

<template>
  <a-table bordered :columns="columns" :components="components" :data-source="data">
    <template #action>
      <a>Delete</a>
    </template>
  </a-table>
</template>

<script lang="ts">
import { reactive } from 'vue';
const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    width: 200,
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    width: 100,
  },
  {
    title: 'Type',
    dataIndex: 'type',
    width: 100,
  },
  {
    title: 'Note',
    dataIndex: 'note',
    width: 100,
  },
  {
    title: 'Action',
    key: 'action',
    slots: { customRender: 'action' },
  },
];
const data = [
  {
    key: 0,
    date: '2018-02-11',
    amount: 120,
    type: 'income',
    note: 'transfer',
  },
  {
    key: 1,
    date: '2018-03-11',
    amount: 243,
    type: 'income',
    note: 'transfer',
  },
  {
    key: 2,
    date: '2018-04-11',
    amount: 98,
    type: 'income',
    note: 'transfer',
  },
];
const draggingMap = {};
columns.forEach(col => {
  draggingMap[col.key] = col.width;
});
const draggingState = reactive(draggingMap);
const ResizeableTitle = (props, children) => {
  let thDom = null;
  const { key, ...restProps } = props;
  const col = columns.find(col => {
    const k = col.dataIndex || col.key;
    return k === key;
  });
  if (!col.width) {
    return <th {...restProps}>{children}</th>;
  }
  const onDrag = x => {
    draggingState[key] = 0;
    col.width = Math.max(x, 1);
  };

  const onDragstop = () => {
    draggingState[key] = thDom.getBoundingClientRect().width;
  };
  return (
    <th {...restProps} ref={r => (thDom = r)} width={col.width} class="resize-table-th">
      {children}
      <VueDraggableResizable
        key={col.key}
        class="table-draggable-handle"
        w={10}
        x={draggingState[key] || col.width}
        z={1}
        axis="x"
        draggable={true}
        resizable={false}
        onDragging={onDrag}
        onDragstop={onDragstop}
      />
    </th>
  );
};
export default {
  name: 'App',
  data() {
    this.components = {
      header: {
        cell: ResizeableTitle,
      },
    };
    return {
      data,
      columns,
    };
  },
};
</script>
<style lang="less">
.resize-table-th {
  position: relative;
  .table-draggable-handle {
    height: 100% !important;
    bottom: 0;
    left: auto !important;
    right: -5px;
    cursor: col-resize;
    touch-action: none;
  }
}
</style>
