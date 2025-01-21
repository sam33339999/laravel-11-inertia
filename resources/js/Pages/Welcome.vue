<script setup lang="ts">
import { ref } from 'vue';
import FWrapper from '@/js/components/FullPage/Wrapper.vue';
import FItem from '@/js/components/FullPage/Item.vue';
import CompanyCard from '@/js/components/CompanyCard/Index.vue';
import ClockDashboard from '@/js/components/Clock/Index.vue';
import Bind from '@/js/components/Bind/Index.vue';

import Order from '@/js/components/Order/Form.vue';
import { QuotationOrder, CompanyInfo, QuotationOrderItem } from '@/js/components/Order/Order';

import LeaveSignature from '@/js/components/Records/LeaveSignature.vue';

const signature = ref<any>({
  leaveNumber: 'HR20241017A15837',
  leaveType: 'AL',
  totalHours: 8,
  status: 1,
  start: '2022-01-01 09:00:00',
  end: '2022-01-01 19:00:00',
  reason: '測試',
  rejectReason: '',
  createdAt: '2022-01-01 12:00:00',
  leaveInfo: [
    { date: 'AL', hours: 8, start: '2022-01-01', end: '2022-01-01' },
    { date: 'AL', hours: 8, start: '2022-01-01', end: '2022-01-01' },
  ],
  steps: [
    { role: '經理', name: '經理A', status: 'pending', comment: '尚未簽核' },
    { role: '經理', name: '經理B', status: 'pending', comment: '尚未簽核' },
    { role: '經理', name: '經理C', status: 'pending', comment: '尚未簽核' },
  ],
});

const fakeData = ref<QuotationOrder>({
  number: 'QO-20231001',
  date: '2023-10-01',
  companyInfo: {
    name: 'Example Corp',
    address: '123 Example Street',
    phone: '123-456-7890',
    email: 'info@example.com',
    contactPerson: 'John Doe',
  },
  selfCompanyInfo: {
    name: 'My Company',
    address: '456 My Street',
    phone: '987-654-3210',
    email: 'contact@mycompany.com',
    contactPerson: 'Jane Smith',
  },
  items: [
    {
      name: 'Item 1',
      description: 'Description for item 1',
      unit: 'pcs',
      quantity: 10,
      price: 100,
      total: 1000,
    },
    {
      name: 'Item 2',
      description: 'Description for item 2',
      unit: 'pcs',
      quantity: 5,
      price: 200,
      total: 1000,
    },
  ],
  total: 2000,
  tax: 200,
  grandTotal: 2200,
  remark: 'This is a remark',
  status: 1,
  step: {
    step: 2,
    name: 'Pending Approval',
    description: 'The quotation is pending approval from the client.',
  },
});
</script>

<template>
  <f-wrapper nav-position="bottom">
    <f-item class="bg-red-300">
      <CompanyCard style="width: 1280px" />
    </f-item>
    <f-item class="bg-blue-300">
      <ClockDashboard />
    </f-item>
    <f-item class="bg-orange-300 text-center">
      <Bind />
    </f-item>
    <f-item class="bg-green-300">
      <Order
        class="w-full"
        :quotation="fakeData"
        :selfCompany="fakeData.selfCompanyInfo"
        :targetCompany="fakeData.companyInfo"
      />
    </f-item>
    <f-item class="bg-gray-300"
      ><LeaveSignature :signature="signature" :steps="signature.steps" class="w-full"
    /></f-item>
    <f-item class="bg-yellow-300"><div class="text-4xl">hhh</div></f-item>
  </f-wrapper>
</template>
