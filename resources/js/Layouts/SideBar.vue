<script setup lang="ts">
import { defineProps, h } from 'vue';
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
  MenuOutlined,
} from '@ant-design/icons-vue';
import { useDashboardStore } from '@/js/stores/dashboardStore';

const dashboardStore = useDashboardStore();
</script>

<template>
  <a-button
    :icon="h(MenuOutlined)"
    size="large"
    class="fixed bottom-9 right-10 lg:left-5 lg:top-3 z-20 text-center items-center"
    @click="() => (dashboardStore.collapsed = !dashboardStore.collapsed)"
  ></a-button>
  <a-layout-sider theme="light" class="rounded-xl absolute my-2 ml-2" :class="{ hidden: dashboardStore.collapsed }">
    <div class="w-full rounded-xl bg-blue-50 text-center py-6">
      <a href="/" class="text-2xl"> System </a>
    </div>
    <a-menu class="bg-transparent" theme="light" v-model:selectedKeys="dashboardStore.selectedKeys" mode="inline">
      <a-menu-item key="0">
        <pie-chart-outlined />
        <span>Dashboard</span>
      </a-menu-item>
      <a-menu-item key="1">
        <pie-chart-outlined />
        <span>Option 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <desktop-outlined />
        <span>Option 2</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #title>
          <span>
            <UserOutlined />
            <span>User</span>
          </span>
        </template>
        <a-menu-item key="3">Tom</a-menu-item>
        <a-menu-item key="4">Bill</a-menu-item>
        <a-menu-item key="5">Alex</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #title>
          <span>
            <team-outlined />
            <span>Team</span>
          </span>
        </template>
        <a-menu-item key="6">Team 1</a-menu-item>
        <a-menu-item key="8">Team 2</a-menu-item>
      </a-sub-menu>
      <a-menu-item key="9">
        <file-outlined />
        <span>File</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>
