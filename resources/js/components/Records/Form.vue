<script setup lang="ts">
import { ref, onMounted, PropType, computed } from 'vue';

const props = defineProps({
  formData: {
    type: Object as PropType<any>,
    required: true,
  },
});
</script>

<template>
  <div class="card p-2"></div>
</template>
