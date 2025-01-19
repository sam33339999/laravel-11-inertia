<script setup lang="ts">
import { ref, defineProps } from 'vue';
import type { BusinessTripSignature, SignatureStep } from './Signature';
import SignatureFields from './SignatureFields.vue';

const props = defineProps<{
  signature: BusinessTripSignature;
  steps: SignatureStep[];
}>();

const activeKey = ref<string | string[]>(['1']);
</script>

<template>
  <div class="card max-w-screen-lg shadow-md rounded-lg border m-10">
    <a-collapse v-model:activeKey="activeKey" :bordered="false" class="bg-gray-50">
      <a-collapse-panel key="1">
        <template #header>
          <a-row>
            <a-col class="flex flex-col" :xs="{ span: 24 }" :lg="{ span: 4 }">
              <span class="text-sm text-gray-400">單號</span>
              <span class="font-bold">{{ props.signature.btNumber }}</span>
            </a-col>
            <a-col class="hidden sm:flex flex-col" :lg="{ span: 4 }">
              <span class="text-sm text-gray-400">出差類型</span>
              <span class="font-bold">{{ props.signature.type === 'domestic' ? '國內' : '國外' }}</span>
            </a-col>
            <a-col class="flex flex-col flex-nowrap" :xs="{ span: 24 }" :lg="{ span: 8 }">
              <span class="text-sm text-gray-400">起訖日期</span>
              <span class="font-bold">{{ props.signature.start }} - {{ props.signature.end }}</span>
            </a-col>
            <a-col class="flex flex-col" :xs="{ span: 6 }" :lg="{ span: 4 }">
              <span class="text-sm text-gray-400">狀態</span>
              <span class="font-bold">{{ props.signature.status }}</span>
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
            <span class="text-sm text-gray-400">出差事由</span>
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
