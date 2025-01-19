<script setup lang="ts">
import { ref, computed } from 'vue';
import { HomeOutlined, UserOutlined } from '@ant-design/icons-vue';

const current = ref(0);

const tabListNoTitle = [
  { key: 'information', tab: '公司資訊' },
  { key: 'contact1', tab: '聯絡人1' },
  { key: 'contact2', tab: '聯絡人2' },
];
const noTitleKey = ref('article');

const onTabChange = (value: string, type: string) => {
  console.log(value, type);
  if (type === 'key') {
    key.value = value;
  } else if (type === 'noTitleKey') {
    noTitleKey.value = value;
  }
};
</script>

<template>
  <a-card
    class="max-w-96"
    title="綠豆公司"
    :tab-list="tabListNoTitle"
    :active-tab-key="noTitleKey"
    @tabChange="(key) => onTabChange(key, 'noTitleKey')"
  >
    <template #customTab="item">
      <span class="items-center flex" v-if="item.key === 'information'">
        <HomeOutlined />
        {{ item.tab }}
      </span>
    </template>

    <a-card-meta title="綠豆公司" description="綠豆公司是一家專業的網頁設計公司，我們提供專業的網頁設計服務。">
      <template #avatar>
        <UserOutlined />
      </template>
      <template #actions> </template>
    </a-card-meta>
  </a-card>
</template>
