<script lang="ts" setup>
import { PieChartOutlined, DesktopOutlined, UserOutlined, TeamOutlined, FileOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';
import SideBar from './SideBar.vue';
import Header from './Header.vue';

import { useDashboardStore } from '../stores/dashboardStore';
const dashboardStore = useDashboardStore();
</script>

<template>
  <a-layout style="min-height: 100vh">
    <SideBar />
    <a-layout>
      <Header />
      <a-layout-content class="mx-2 lg:mx-4">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <div class="p-0 md:p-2" :style="{ background: '#fff', minHeight: '360px' }">
          <slot />
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center"> Ant Design ©2018 Created by Ant UED </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<style scoped>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>
