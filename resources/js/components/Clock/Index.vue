<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import Clock from './Clock.vue';
const currentTime = ref('--:--:--');
const now = new Date().toISOString().slice(0, 10).replace(/-/g, '/');
const tzMatch = new Date().toString().match(/\(([^)]+)\)/);
const tzString = tzMatch ? tzMatch[1] : 'Unknown Timezone';

onMounted(() => {
  const interval = setInterval(() => {
    currentTime.value = new Date().toLocaleTimeString();
  }, 1000);

  onUnmounted(() => {
    clearInterval(interval);
  });
});
</script>

<template>
  <div class="flex flex-col gap-3">
    <div class="flex flex-col">
      <h1 class="text-2xl font-bold">{{ now }} {{ tzString }}</h1>
      <h1 class="text-3xl font-bold pl-5">{{ currentTime }}</h1>
    </div>
    <div class="flex flex-col justify-center gap-5">
      <Clock type="in" />
      <Clock type="out" />
    </div>
  </div>
</template>

<style scoped></style>
