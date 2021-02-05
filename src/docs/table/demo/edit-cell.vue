<docs>
---
order: 6
title:
  en-US: Editable Cells
  zh-CN: 可编辑单元格
---

## zh-CN

带单元格编辑功能的表格。

## en-US

Table with editable cells.

</docs>

<template>
  <a-button class="editable-add-btn" @click="handleAdd" style="margin-bottom: 8px">Add</a-button>
  <a-table bordered :data-source="dataSource" :columns="columns">
    <template #name="{ text, record }">
      <editable-cell :text="text" @change="val => onCellChange(record.key, 'name', val)" />
    </template>
    <template #operation="{ record }">
      <a-popconfirm
        v-if="dataSource.length"
        title="Sure to delete?"
        @confirm="onDelete(record.key)"
      >
        <a>Delete</a>
      </a-popconfirm>
    </template>
  </a-table>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { CheckOutlined, EditOutlined } from '@ant-design/icons-vue';

const EditableCell = defineComponent({
  name: 'EditableCell',
  template: `
    <div class="editable-cell">
        <div v-if="editable" class="editable-cell-input-wrapper">
          <a-input v-model:value="value" @pressEnter="check" />
          <check-outlined class="editable-cell-icon-check" @click="check" />
        </div>
        <div v-else class="editable-cell-text-wrapper">
          {{value || ' '}}
          <edit-outlined class="editable-cell-icon" @click="edit" />
        </div>
    </div>
  `,
  components: {
    CheckOutlined,
    EditOutlined,
  },
  props: {
    text: String,
    onChange: Function,
  },
  setup(props, { emit }) {
    const state = reactive({
      value: props.text,
      editable: false,
    });

    const handleChange = (e: any) => {
      const value = e.target.value;
      state.value = value;
    };
    const check = () => {
      state.editable = false;
      emit('change', state.value);
    };
    const edit = () => {
      state.editable = true;
    };

    return {
      ...toRefs(state),
      handleChange,
      check,
      edit,
    };
  },
});

interface Data {
  key: string | number;
  name: string;
  age: number | string;
  address: string;
}

export default defineComponent({
  components: {
    EditableCell,
  },
  setup() {
    const state = reactive<{ count: number; dataSource: Data[] }>({
      count: 2,
      dataSource: [
        {
          key: '0',
          name: 'Edward King 0',
          age: '32',
          address: 'London, Park Lane no. 0',
        },
        {
          key: '1',
          name: 'Edward King 1',
          age: '32',
          address: 'London, Park Lane no. 1',
        },
      ],
    });

    const onCellChange = (key: string, dataIndex: keyof Data, value: any) => {
      const dataSource = [...state.dataSource];
      const target = dataSource.find(item => item.key === key);
      if (target) {
        target[dataIndex] = value;
        state.dataSource = dataSource;
      }
    };
    const onDelete = (key: string) => {
      const dataSource = [...state.dataSource];
      state.dataSource = dataSource.filter(item => item.key !== key);
    };
    const handleAdd = () => {
      const { count, dataSource } = state;
      const newData = {
        key: `${count}`,
        name: `Edward King ${count}`,
        age: '32',
        address: `London, Park Lane no. ${count}`,
      };
      state.dataSource = [...dataSource, newData];
      state.count = count + 1;
    };

    const columns = [
      {
        title: 'name',
        dataIndex: 'name',
        width: '30%',
        slots: { customRender: 'name' },
      },
      {
        title: 'age',
        dataIndex: 'age',
      },
      {
        title: 'address',
        dataIndex: 'address',
      },
      {
        title: 'operation',
        dataIndex: 'operation',
        slots: { customRender: 'operation' },
      },
    ];

    return {
      columns,
      onCellChange,
      onDelete,
      handleAdd,
      ...toRefs(state),
    };
  },
});
</script>
<style lang="less">
.editable-cell {
  position: relative;
  .editable-cell-input-wrapper,
  .editable-cell-text-wrapper {
    padding-right: 24px;
  }

  .editable-cell-text-wrapper {
    padding: 5px 24px 5px 5px;
  }

  .editable-cell-icon,
  .editable-cell-icon-check {
    position: absolute;
    right: 0;
    width: 20px;
    cursor: pointer;
  }

  .editable-cell-icon {
    line-height: 18px;
    display: none;
  }

  .editable-cell-icon-check {
    line-height: 28px;
  }

  .editable-cell-icon:hover,
  .editable-cell-icon-check:hover {
    color: #108ee9;
  }

  .editable-add-btn {
    margin-bottom: 8px;
  }
}
.editable-cell:hover .editable-cell-icon {
  display: inline-block;
}
</style>
