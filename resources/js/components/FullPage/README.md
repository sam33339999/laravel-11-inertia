```vue
<script setup lang="ts">
import { ref } from 'vue';
import FWrapper from '@/js/components/FullPage/Wrapper.vue';
import FItem from '@/js/components/FullPage/Item.vue';
</script>

<template>
  <f-wrapper nav-position="bottom">
    <f-item class="bg-red-300"><div class="text-4xl">aaa</div></f-item>
    <f-item class="bg-blue-300"><div class="text-4xl">vvv</div></f-item>
    <f-item class="bg-orange-300"><div class="text-4xl">ccc</div></f-item>
    <f-item class="bg-green-300"><div class="text-4xl">ddd</div></f-item>
    <f-item class="bg-gray-300"><div class="text-4xl">eee</div></f-item>
    <f-item class="bg-yellow-300"><div class="text-4xl">hhh</div></f-item>
  </f-wrapper>
</template>
```
