<docs>
---
order: 24
title:
  en-US: Editable Cell2
  zh-CN: 可编辑单元格2
---

## zh-CN

带单元格编辑功能的表格。

## en-US

Table with editable cell.
</docs>

<template>
  <a-button @click="handleAdd" type="primary" style="margin-bottom: 16px">Add a row</a-button>
  <a-table
    :columns="columns"
    :components="components"
    :rowClassName="() => 'editable-row'"
    bordered
    :dataSource="dataSource"
  ></a-table>
</template>

<script lang="ts">
import { computed, defineComponent, ref, unref, nextTick } from 'vue';

interface Item {
  key: string;
  name: string;
  age: string;
  address: string;
}

const EditableCell = defineComponent({
  name: 'EditableCell',
  template: `
    <td>
      <template v-if="editable">
        <template v-if="editing">
          <a-input ref="input" @pressEnter="save" @blur="save" v-model:value="inputValue" />
        </template>
        <template v-else>
          <div class="editable-cell-value-wrap" style="padding-right: 24px" @click="toggleEdit">
            <slot />
          </div>
        </template>
      </template>
      <template v-else>
        <slot />
      </template>
    </td>`,
  props: {
    editable: {
      type: Boolean,
    },
    record: {
      type: Object,
    },
    dataIndex: {
      type: String,
    },
    title: {
      type: String,
    },
    handleSave: {
      type: Function,
    },
  },
  setup(props) {
    const editing = ref(false);
    const input = ref();
    const inputValue = ref<string>();

    const toggleEdit = () => {
      editing.value = !editing.value;
      if (editing.value) {
        inputValue.value = props.record![props.dataIndex!];
        nextTick(() => {
          input.value.focus();
        });
      }
    };

    const save = () => {
      const { record, handleSave, dataIndex } = props;
      toggleEdit();
      handleSave!({ ...record, ...{ [dataIndex!]: unref(inputValue) } });
    };

    return {
      input,
      save,
      editing,
      inputValue,
      toggleEdit,
    };
  },
});

const column = [
  {
    title: 'name',
    dataIndex: 'name',
    width: '30%',
    editable: true,
  },
  {
    title: 'age',
    dataIndex: 'age',
  },
  {
    title: 'address',
    dataIndex: 'address',
  },
];

export default defineComponent({
  setup() {
    const dataSource = ref<Item[]>([
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
    ]);

    const count = ref(2);

    const handleAdd = () => {
      const newData = {
        key: String(count.value),
        name: `Edward King ${count.value}`,
        age: '32',
        address: `London, Park Lane no. ${count.value}`,
      };

      dataSource.value = [...dataSource.value, newData];
      count.value = count.value + 1;
    };

    const handleSave = (row: Item) => {
      const newData = [...dataSource.value];
      const index = newData.findIndex(item => row.key === item.key);
      const item = newData[index];
      newData.splice(index, 1, {
        ...item,
        ...row,
      });
      dataSource.value = newData;
    };

    const columns = computed(() => {
      return column.map(col => {
        if (!col.editable) {
          return col;
        }
        return {
          ...col,
          customCell: (record: Item) => {
            return {
              record,
              editable: col.editable,
              dataIndex: col.dataIndex,
              title: col.title,
              handleSave,
            };
          },
        };
      });
    });

    return {
      column,
      columns,
      dataSource,
      components: {
        body: {
          cell: EditableCell,
        },
      },
      handleAdd,
    };
  },
});
</script>

<style>
.editable-cell {
  position: relative;
}

.editable-cell-value-wrap {
  padding: 5px 12px;
  cursor: pointer;
}

.editable-row:hover .editable-cell-value-wrap {
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  padding: 4px 11px;
}
</style>
