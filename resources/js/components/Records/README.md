```vue
<script setup lang="ts">
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
</script>
<template>
    <!-- 申請進度 -->
    <LeaveSignature :signature="signature" :steps="signature.steps" />
</template>
```


## BusinessTrip
```vue
<script setup lang="ts">
import BusinessTripSignature from '@/js/components/Records/BusinessTrip.vue';
import type {
  BusinessTripSignature as BusinessTripSignatureType,
  SignatureStep,
} from '@/js/components/Records/Signature';

const signature: BusinessTripSignatureType = {
  btNumber: '2021-0001',
  type: 'domestic',
  start: '2021-01-01',
  end: '2021-01-02',
  status: 1,
  reason: '出差事由',
  rejectReason: '',
  createdAt: '2021-01-01',
  steps: [
    {
      role: '經理',
      name: '經理 A',
      status: '測試',
      comment: '2021-01-01',
    },
    {
      role: '經理',
      name: '經理 A',
      status: '測試',
      comment: '2021-01-01',
    },
    {
      role: '經理',
      name: '經理 A',
      status: '測試',
      comment: '2021-01-01',
    },
  ],
  tripInfo: [
    {
      start: '2021-01-01',
      end: '2021-01-02',
      position: 'Location A',
    },
  ],
};
</script>

<template>
  <BusinessTripSignature :signature="signature" :steps="signature.steps" />
</template>
```
