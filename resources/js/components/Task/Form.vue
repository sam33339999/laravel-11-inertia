<script setup lang="ts">
import { ref, onMounted, PropType, computed } from 'vue';

const props = defineProps({
  formData: {
    type: Object as PropType<any>,
    required: true,
  },
});
const activeKey = ref<string | string[]>(['1']);
</script>

<template>
  <a-collapse v-model:activeKey="activeKey" :bordered="false" class="bg-gray-50">
    <a-collapse-panel key="1">
      <template #header>
        <a-row>
          <a-col class="flex flex-col" :xs="{ span: 24 }" :lg="{ span: 4 }">
            <span class="text-sm text-gray-400">客戶</span>
            <span class="font-bold">{{ props.formData.leaveNumber }}</span>
          </a-col>
          <a-col class="hidden sm:flex flex-col" :lg="{ span: 4 }">
            <span class="text-sm text-gray-400">假別</span>
            <span class="font-bold">{{ props.formData.leaveType }}</span>
          </a-col>
          <a-col class="flex flex-col flex-nowrap" :xs="{ span: 24 }" :lg="{ span: 8 }">
            <span class="text-sm text-gray-400">起訖日期</span>
            <span class="font-bold">{{ props.formData.start }} - {{ props.formData.end }}</span>
          </a-col>
          <a-col class="flex flex-col" :xs="{ span: 6 }" :lg="{ span: 4 }">
            <span class="text-sm text-gray-400">總時數</span>
            <span class="font-bold">{{ props.formData.totalHours }}</span>
          </a-col>
          <a-col class="flex flex-col mt-2" :xs="{ span: 6 }" :lg="{ span: 4 }">
            <span class="text-lg text-gray-400">
              <a-tag color="blue">簽核中</a-tag>
            </span>
          </a-col>
        </a-row>
      </template>
    </a-collapse-panel>
  </a-collapse>
</template>
