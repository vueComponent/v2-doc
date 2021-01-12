<template>
  <div>
    <a-button type="primary" :loading="show" shape="circle">
      <template v-if="show" v-slot:icon>
        <search-outlined />
      </template>
    </a-button>
    <a-button v-if="!show" type="primary" shape="circle">A</a-button>
    <a-button type="primary" @click="show = !show">
      <search-outlined slot="icon" />
      Search
    </a-button>
    <a-button shape="circle">
      <search-outlined slot="icon" />
    </a-button>
    <a-button>
      <search-outlined slot="icon" />
      Search
    </a-button>
    <a-button shape="circle">
      <search-outlined slot="icon" />
    </a-button>
    <a-button>
      <search-outlined slot="icon" />
      Search
    </a-button>
    <a-button type="dashed" shape="circle">
      <search-outlined slot="icon" />
    </a-button>
    <a-button type="dashed">
      <search-outlined slot="icon" />
      Search
    </a-button>
  </div>
</template>
<script>
import { SearchOutlined } from '@ant-design/icons-vue';
export default {
  components: {
    SearchOutlined,
  },
  data() {
    return {
      show: true,
    };
  },
};
</script>
