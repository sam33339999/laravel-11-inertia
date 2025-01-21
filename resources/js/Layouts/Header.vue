<script setup lang="ts">
import { defineProps, h } from 'vue';
import { useDashboardStore } from '@/js/stores/dashboardStore';

const dashboardStore = useDashboardStore();
</script>

<template>
  <a-layout-header class="p-0 text-white justify-between flex">
    <a-row class="text-white h-full items-center justify-between">我是Header</a-row>
  </a-layout-header>
</template>
