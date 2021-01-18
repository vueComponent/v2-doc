<template>
  <a-menu
    :inlineIndent="30"
    class="aside-container menu-site"
    mode="inline"
    :selectedKeys="[activeMenuItem]"
  >
    <template v-for="m in menus">
      <template v-if="m.children"></template>
      <template v-else>
        <a-menu-item :key="m.path">
          <router-link :to="getLocalizedPathname(m.path, isZhCN)">
            {{ isZhCN ? `${m.title} ${m.subtitle || ''}` : m.enTitle }}
          </router-link>
        </a-menu-item>
      </template>
    </template>
  </a-menu>
</template>
<script lang="ts">
import { getLocalizedPathname } from '@/utils/util';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Menu',
  props: ['menus', 'isZhCN', 'activeMenuItem'],
  setup() {
    return {
      getLocalizedPathname,
    };
  },
});
</script>
<style lang="less" scoped></style>
