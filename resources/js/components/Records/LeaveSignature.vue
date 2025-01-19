<script setup lang="ts">
import { ref, defineProps } from 'vue';
import type { LeaveSignature, SignatureStep } from './Signature';
import SignatureFields from './SignatureFields.vue';

const props = defineProps<{
  signature: LeaveSignature;
  steps: SignatureStep[];
}>();

const activeKey = ref<string | string[]>(['1']);
const LeaveType2Str = (type: string) => {
  switch (type) {
    case 'AL':
      return '特休';
    case 'SL':
      return '事假';
    case 'ML':
      return '病假';
    case 'BL':
      return '喪假';
    default:
      return '未知';
  }
};
</script>

<template>
  <div class="card max-w-screen-lg shadow-md rounded-lg border m-10">
    <a-collapse v-model:activeKey="activeKey" :bordered="false" class="bg-gray-50">
      <a-collapse-panel key="1">
        <template #header>
          <a-row>
            <a-col class="flex flex-col" :xs="{ span: 24 }" :lg="{ span: 4 }">
              <span class="text-sm text-gray-400">單號</span>
              <span class="font-bold">{{ props.signature.leaveNumber }}</span>
            </a-col>
            <a-col class="hidden sm:flex flex-col" :lg="{ span: 4 }">
              <span class="text-sm text-gray-400">假別</span>
              <span class="font-bold">{{ LeaveType2Str(props.signature.leaveType) }}</span>
            </a-col>
            <a-col class="flex flex-col flex-nowrap" :xs="{ span: 24 }" :lg="{ span: 8 }">
              <span class="text-sm text-gray-400">起訖日期</span>
              <span class="font-bold">{{ props.signature.start }} - {{ props.signature.end }}</span>
            </a-col>
            <a-col class="flex flex-col" :xs="{ span: 6 }" :lg="{ span: 4 }">
              <span class="text-sm text-gray-400">總時數</span>
              <span class="font-bold">{{ props.signature.totalHours }}</span>
            </a-col>
            <a-col class="flex flex-col mt-2" :xs="{ span: 6 }" :lg="{ span: 4 }">
              <span class="text-lg text-gray-400">
                <a-tag color="blue">簽核中</a-tag>
              </span>
            </a-col>
          </a-row>
        </template>

        <!-- 內文主體 -->
        <a-row class="pl-6">
          <a-col class="flex flex-col" :lg="{ span: 4 }" :xs="{ span: 12 }">
            <span class="text-sm text-gray-400">請假事由</span>
            <span>{{ props.signature.reason }}</span>
          </a-col>
          <a-col class="flex flex-col" :lg="{ span: 4 }" :xs="{ span: 12 }">
            <span v-if="props.signature.rejectReason" class="text-sm text-gray-400">駁回原因</span>
            <span>{{ props.signature.rejectReason }}</span>
          </a-col>
          <a-col class="flex flex-col" :lg="{ span: 8 }" :xs="{ span: 12 }">
            <span class="text-sm text-gray-400">附件</span>
            <span>{{ props.signature.attachment }}</span>
          </a-col>
          <a-col class="flex flex-col" :lg="{ span: 8 }" :xs="{ span: 12 }">
            <span class="text-sm text-gray-400">申請日期</span>
            <span>{{ props.signature.createdAt }}</span>
          </a-col>
        </a-row>

        <!-- 簽核流程 -->
        <signature-fields :signatureSteps="props.steps" />
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<style scoped></style>
