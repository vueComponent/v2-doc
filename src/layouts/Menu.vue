<template>
  <a-menu
    :inlineIndent="30"
    class="aside-container menu-site"
    mode="inline"
    :selectedKeys="[activeMenuItem]"
  >
    <a-menu-item v-if="showOverview" key="/components/overview">
      <router-link :to="getLocalizedPathname('/components/overview', isZhCN)">
        {{ isZhCN ? '组件总览' : 'Components Overview' }}
      </router-link>
    </a-menu-item>
    <template v-for="m in dataSource">
      <template v-if="m.children">
        <a-menu-item-group :key="m.order" :title="isZhCN ? m.title : m.enTitle">
          <template v-for="n in m.children">
            <a-menu-item v-if="n.path" :key="n.path">
              <router-link :to="getLocalizedPathname(n.path, isZhCN)">
                <span>{{ isZhCN ? n.title : n.enTitle || n.title }}</span>
                <span v-if="isZhCN" class="chinese">{{ n.subtitle }}</span>
              </router-link>
            </a-menu-item>
          </template>
        </a-menu-item-group>
      </template>
      <template v-else>
        <a-menu-item :key="m.path">
          <router-link :to="getLocalizedPathname(m.path, isZhCN)">
            {{ isZhCN ? `${m.title} ${m.subtitle || ''}` : m.enTitle || m.title }}
          </router-link>
        </a-menu-item>
      </template>
    </template>
  </a-menu>
</template>
<script lang="ts">
import { getLocalizedPathname } from '@/utils/util';
import { computed, defineComponent } from 'vue';
import { groupBy } from 'lodash-es';
import { useRoute } from 'vue-router';
const typeOrder: any = {
  组件总览: { order: -1, en: 'Overview' },
  通用: { order: 0, en: 'General' },
  布局: { order: 1, en: 'Layout' },
  导航: { order: 2, en: 'Navigation' },
  数据录入: { order: 3, en: 'Data Entry' },
  数据展示: { order: 4, en: 'Data Display' },
  反馈: { order: 5, en: 'Feedback' },
  其他: { order: 6, en: 'Other' },
  废弃: { order: 7, en: 'Deprecated' },
};
export default defineComponent({
  name: 'Menu',
  props: ['menus', 'isZhCN', 'activeMenuItem'],
  setup(props) {
    const route = useRoute();
    const showOverview = computed(() => {
      return route.path.indexOf('/components') === 0;
    });
    const dataSource = computed(() => {
      const group = groupBy(props.menus, m => m.type || m.category);
      const keys: string[] = Object.keys(group);
      const newMenus = keys
        .map(key => {
          return {
            title: key,
            order: typeOrder[key] && typeOrder[key].order,
            enTitle: typeOrder[key] && typeOrder[key].en,
            children: group[key],
          };
        })
        .sort((a, b) => a.order - b.order);
      return keys.length === 1 ? props.menus : newMenus;
    });
    return {
      getLocalizedPathname,
      dataSource,
      showOverview,
    };
  },
});
</script>
<style lang="less" scoped></style>
