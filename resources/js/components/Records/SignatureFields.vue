<script setup lang="ts">
import { ref, PropType } from 'vue';
import type { SignatureStep } from './Signature';

defineProps({ signatureSteps: Array as PropType<SignatureStep[]> });
</script>

<template>
  <div class="max-w-screen-lg my-2 rounded-lg">
    <div
      v-for="(step, idx) in signatureSteps"
      class="relative m-4 p-3 text-black-400 text-base rounded-lg"
      :class="{ 'bg-gray-100': idx % 2 === 0 }"
    >
      <div>
        <div>
          <span class="text-sm text-gray-400 inline-block w-20">{{ step.role }}</span
          ><span class="text-sm text-gray-400">｜</span><span class="text-sm text-gray-400"> {{ step.name }} </span>
        </div>
      </div>
      <div class="absolute right-3 top-4 2xl:top-7">
        <span class="hidden md:inline-block">&emsp;&emsp;</span>
        <a-tag>簽核中</a-tag>
      </div>
      <div class="mt-3">
        <span class="text-sm text-gray-400 inline-block w-20">簽核意見</span
        ><span class="text-sm text-gray-400">｜</span><span class="text-sm text-gray-400"> 尚未簽核</span>
      </div>
      <span class="block md:hidden text-right"></span>
    </div>
  </div>
</template>

<style scoped></style>
