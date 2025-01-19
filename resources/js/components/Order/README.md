```vue
<script setup lang="ts">
import { ref } from 'vue';
import Order from '@/js/components/Order/Form.vue';

import { QuotationOrder, CompanyInfo, QuotationOrderItem } from '@/js/components/Order/Order';

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
  <Order :quotation="fakeData" :selfCompany="fakeData.selfCompanyInfo" :targetCompany="fakeData.companyInfo" />
</template>

```
