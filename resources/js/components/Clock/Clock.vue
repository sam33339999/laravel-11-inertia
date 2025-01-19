<script setup lang="ts">
import { ref, computed } from 'vue';
import { useClockStore } from '@/js/stores/clockStore';

interface ClockProps {
  type: 'in' | 'out';
  disabled?: boolean;
  callback?: () => void;
}

const clockStore = useClockStore();
const props = defineProps<ClockProps>();
const location = ref('');
const clockTime = ref('尚未打卡');

const buttonText = computed(() => (props.type === 'in' ? '上班打卡' : '下班打卡'));
const placeholder = computed(() => (props.type === 'in' ? '上班地點' : '下班地點'));

const clickHandler = () => {
  clockStore.queryClock(location.value, props.type);
};
</script>

<template>
  <div class="flex w-full justify-center items-center gap-2 px-2">
    <a-input-search size="large" class="w-full" :placeholder="placeholder" v-model:value="location">
      <template #enterButton>
        <a-button type="primary" @click="clickHandler">{{ buttonText }}</a-button>
      </template>
    </a-input-search>

    <a-input size="large" class="w-1/2 md:w-full" disabled :placeholder="clockTime"></a-input>
  </div>
</template>
