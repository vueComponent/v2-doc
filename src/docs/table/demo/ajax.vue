<docs>
---
order: 10
title:
  en-US: Ajax
  zh-CN: 远程加载数据
---

## zh-CN

这个例子通过简单的 ajax 读取方式，演示了如何从服务端读取并展现数据，具有筛选、排序等功能以及页面 loading 效果。开发者可以自行接入其他数据处理方式。

另外，本例也展示了筛选排序功能如何交给服务端实现，列不需要指定具体的 `onFilter` 和 `sorter` 函数，而是在把筛选和排序的参数发到服务端来处理。

## en-US

This example shows how to fetch and present data from a remote server, and how to implement filtering and sorting in server side by sending related parameters to server.

**Note, this example use [Mock API](https://randomuser.me) that you can look up in Network Console.**
</docs>

<template>
  <a-table
    :columns="columns"
    :row-key="record => record.login.uuid"
    :data-source="dataSource"
    :pagination="pagination"
    :loading="loading"
    @change="handleTableChange"
  >
    <template #name="{ text }">{{ text.first }} {{ text.last }}</template>
  </a-table>
</template>
<script lang="ts">
import { TableState, TableStateFilters } from 'ant-design-vue/es/table/interface';
import axios from 'axios';
import { defineComponent, onMounted, reactive, ref, UnwrapRef } from 'vue';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    width: '20%',
    slots: { customRender: 'name' },
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
    ],
    width: '20%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
];

type Pagination = TableState['pagination'];

export default defineComponent({
  setup() {
    const dataSource = ref([]);
    const loading = ref(false);
    const pagination: UnwrapRef<Pagination> = reactive({});
    const fetch = (params = {}) => {
      console.log('params:', params);
      loading.value = true;
      axios
        .get('https://randomuser.me/api', {
          params: {
            results: 10,
            ...params,
          },
        })
        .then(({ data }) => {
          console.log(data);
          // Read total count from server
          // pagination.total = data.totalCount;
          pagination.total = 200;
          loading.value = false;
          dataSource.value = data.results;
        });
    };
    const handleTableChange = (pag: Pagination, filters: TableStateFilters, sorter: any) => {
      console.log(pag);
      Object.assign(pagination, pag);
      fetch({
        results: pagination.pageSize,
        page: pagination.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters,
      });
    };
    onMounted(() => {
      fetch();
    });
    return {
      dataSource,
      pagination,
      loading,
      columns,
      handleTableChange,
    };
  },
});
</script>
