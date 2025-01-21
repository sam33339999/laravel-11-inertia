<script setup lang="ts">
import { ref, onMounted, PropType, computed } from 'vue';
import type { QuotationOrder, CompanyInfo, QuotationOrderItem } from './Order';

const props = defineProps<{ quotation: QuotationOrder; selfCompany: CompanyInfo; targetCompany: CompanyInfo }>();

const activeKey = ref<string | string[]>(['1']);

const columns = [
  { title: '名稱', dataIndex: 'name', key: 'name' },
  { title: '描述', dataIndex: 'description', key: 'description' },
  { title: '單位', dataIndex: 'unit', key: 'unit' },
  { title: '數量', dataIndex: 'quantity', key: 'quantity' },
  { title: '價格', dataIndex: 'price', key: 'price' },
  { title: '總價', dataIndex: 'total', key: 'total' },
];
</script>

<template>
  <a-collapse expandIconPosition="end" :ghost="true" v-model:activeKey="activeKey" :bordered="false" class="bg-gray-50">
    <a-collapse-panel key="1" class="p-5">
      <template #header>
        <a-row>
          <a-col class="flex flex-col" :xs="{ span: 24 }" :lg="{ span: 4 }">
            <span class="text-sm text-gray-400">報價單編號</span>
            <span class="font-bold">{{ props.quotation.number }}</span>
          </a-col>
          <a-col class="hidden sm:flex flex-col" :lg="{ span: 4 }">
            <span class="text-sm text-gray-400">報價日期</span>
            <span class="font-bold">{{ props.quotation.date }}</span>
          </a-col>
          <a-col class="flex flex-col flex-nowrap" :xs="{ span: 24 }" :lg="{ span: 8 }">
            <span class="text-sm text-gray-400">報價人</span>
            <span class="font-bold">{{ props.quotation.selfCompanyInfo.contactPerson }}</span>
          </a-col>
          <a-col class="flex flex-col" :xs="{ span: 6 }" :lg="{ span: 4 }">
            <span class="text-sm text-gray-400">公司</span>
            <span class="font-bold">{{ props.quotation.companyInfo.name }}</span>
          </a-col>
        </a-row>
      </template>

      <!-- 內文主體 -->

      <div class="w-full bg-white p-2 rounded-md">
        <a-row class="mt-2 mb-5">
          <a-col :span="8"> </a-col>
          <a-col :span="8" class="text-center">
            <p class="text-3xl">報價單</p>
          </a-col>
          <a-col :span="8"> </a-col>
        </a-row>

        <a-row class="p-2">
          <a-col span="11">
            <a-descriptions title="公司資料">
              <a-descriptions-item label="UserName">{{ props.selfCompany.contactPerson }}</a-descriptions-item>
              <a-descriptions-item label="Telephone">{{ props.selfCompany.phone }}</a-descriptions-item>
              <a-descriptions-item label="Live">{{ props.selfCompany.contactPerson }}</a-descriptions-item>
              <a-descriptions-item label="Remark">empty</a-descriptions-item>
              <a-descriptions-item label="Address">
                {{ props.selfCompany.address }}
              </a-descriptions-item>
            </a-descriptions>
          </a-col>
          <a-divider type="vertical" class="h-32" />
          <a-col span="11">
            <a-descriptions title="客戶資訊">
              <a-descriptions-item label="UserName">{{ props.targetCompany.contactPerson }}</a-descriptions-item>
              <a-descriptions-item label="Telephone">{{ props.targetCompany.phone }}</a-descriptions-item>
              <a-descriptions-item label="Live">{{ props.targetCompany.contactPerson }}</a-descriptions-item>
              <a-descriptions-item label="Remark">empty</a-descriptions-item>
              <a-descriptions-item label="Address">
                {{ props.targetCompany.address }}
              </a-descriptions-item>
            </a-descriptions>
          </a-col>
        </a-row>

        <a-table
          :columns="columns"
          :data-source="props.quotation.items"
          :row-class-name="(_record: any, index: number) => (index % 2 === 1 ? 'bg-gray-50' : null)"
          :pagination="false"
        >
          <template #summary> 總結 </template>
        </a-table>

        {{ props.quotation.remark }}
      </div>
      <!-- 內文主體結束 -->
    </a-collapse-panel>
  </a-collapse>
</template>
