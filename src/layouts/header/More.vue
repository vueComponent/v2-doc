<template>
  <a-dropdown>
    <a-button size="small" class="header-button">
      {{ $t('app.header.menu.more') }}
      <DownOutlined
        :style="{
          fontSize: '9px',
          margin: downstyle,
          verticalAlign: 'middle',
        }"
      />
    </a-button>
    <template v-slot:overlay>
      <a-menu>
        <a-menu-item key="pro">
          <a target="_blank" href="https://pro.antdv.com">Pro For Vue2(Free)</a>
        </a-menu-item>
        <a-menu-item key="vip">
          <a target="_blank" href="https://store.antdv.com/pro">Pro For Vue3</a>
        </a-menu-item>
        <a-menu-item key="design">
          <router-link
            :to="{
              path: getLocalizedPathname(isZhCN, '/docs/vue/download/'),
            }"
          >
            {{ isZhCN ? '设计资源' : 'Design Resources' }}
          </router-link>
        </a-menu-item>
        <a-menu-item key="vscode">
          <a
            target="_blank"
            href="https://marketplace.visualstudio.com/items?itemName=ant-design-vue.vscode-ant-design-vue-helper"
          >
            VS Code Extension
          </a>
        </a-menu-item>
        <a-menu-item key="awesome">
          <a target="_blank" href="https://github.com/vueComponent/ant-design-vue-awesome">
            Awesome
          </a>
        </a-menu-item>
        <a-menu-item key="wechat">
          <a-popover placement="right">
            <a>{{ isZhCN ? '微信' : 'WeChat' }}</a>
            <template v-slot:content>
              <img width="160" height="160" alt="wechat" src="https://qn.antdv.com/wechat.jpeg" />
            </template>
          </a-popover>
        </a-menu-item>
        <a-menu-item key="qq">
          <a-popover placement="right" }>
            <a>QQ(217490093)</a>
            <template v-slot:content>
              <img width="160" height="160" alt="qq" src="https://qn.antdv.com/qq.png" />
            </template>
          </a-popover>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>
<script lang="ts">
import { computed, defineComponent, inject } from 'vue';
import { DownOutlined } from '@ant-design/icons-vue';
import { GlobalConfig } from '@/App.vue';
import { GLOBAL_CONFIG } from '@/SymbolKey';
import { getLocalizedPathname } from '@/utils/util';

export default defineComponent({
  props: {
    isRTL: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const downstyle = computed(() => (props.isRTL ? '-1px 2px 0 0' : '-1px 0 0 2px'));
    return {
      downstyle,
      isZhCN: inject<GlobalConfig>(GLOBAL_CONFIG).isZhCN.value,
      getLocalizedPathname,
    };
  },
  components: {
    DownOutlined,
  },
});
</script>
