<script setup lang="ts">
import { ref, computed } from 'vue';
import { HomeOutlined, UserOutlined } from '@ant-design/icons-vue';
const value = ref('全部');
const data = ref(['全部', '互動', '代辦']);

interface Histories {
  date: string;
  btnColor: string;
  title: string;
  subTitle?: string;
  content: string;
  createdAt: string;
  activityWith: string;
}

const historyData: Histories[] = [
  {
    date: '2025-01-20',
    btnColor: 'success',
    title: '報價',
    subTitle: '提供產品報價',
    content: '需階梯式報價，產品預估數量 8K',
    createdAt: '2022-04-26 15:20',
    activityWith: '謝查理>業務部',
  },
  {
    date: '2025-01-20',
    btnColor: 'success',
    title: '報價',
    subTitle: '提供產品報價',
    content: '需階梯式報價，產品預估數量 8K',
    createdAt: '2022-04-26 15:20',
    activityWith: '謝查理>業務部',
  },
  {
    date: '2025-01-01',
    btnColor: 'success',
    title: '送禮',
    subTitle: '新年禮物',
    content: '',
    createdAt: '2022-04-26 15:20',
    activityWith: '謝查理>業務部',
  },
  {
    date: '2024-06-30',
    btnColor: 'success',
    title: '送禮',
    subTitle: '端午送禮',
    content: '申請 3 本筆記本，王總、林小姐、研發張先生各一份',
    createdAt: '2022-04-26 15:20',
    activityWith: '謝查理>業務部',
  },
  {
    date: '2024-06-20',
    btnColor: 'success',
    title: '去電',
    subTitle: '追蹤進度',
    content: '專案 K-0001',
    createdAt: '2022-04-26 15:20',
    activityWith: '謝查理>業務部',
  },
  {
    date: '2024-06-18',
    btnColor: 'success',
    title: '去電',
    subTitle: '追蹤進度',
    content: '專案 K-0001',
    createdAt: '2022-04-26 15:20',
    activityWith: '謝查理>業務部',
  },
];

const showYearMonth = (date: string) => {
  const today = new Date().toISOString().split('T')[0];
  if (date === today) {
    return '今天';
  }
  return date.split('-').slice(0, 2).join('/');
};
</script>

<template>
  <a-row>
    <a-col :xs="{ span: 24 }" :lg="{ span: 6 }" class="p-1">
      <a-card size="small" title="標籤">
        <a-tag>中小企業</a-tag>
        <a-tag>潛力客</a-tag>
      </a-card>
      <a-card class="mt-4" size="small" title="聯絡資訊">
        <a-descriptions :column="1">
          <a-descriptions-item label="電話">123-456-7890</a-descriptions-item>
          <a-descriptions-item label="傳真">098-765-4321</a-descriptions-item>
          <a-descriptions-item label="地址">123 Example Street, City, Country</a-descriptions-item>
          <a-descriptions-item label="Email">example@example.com</a-descriptions-item>
          <a-descriptions-item label="統一編號">88888888</a-descriptions-item>
          <a-descriptions-item label="公司負責人">王大明</a-descriptions-item>
          <a-descriptions-item label="網站">www.example.com</a-descriptions-item>
        </a-descriptions>
      </a-card>
    </a-col>

    <a-col :xs="{ span: 24 }" :lg="{ span: 18 }" class="p-1">
      <a-segmented v-model:value="value" :options="data"></a-segmented>

      <a-steps class="mt-3 ml-2" progress-dot direction="vertical" size="small" :current="-1">
        <!-- foreach 所有歷程 -->
        <a-step v-for="(history, index) in historyData" :key="index" disabled>
          <template #description>
            <a-row v-if="index === 0 || showYearMonth(history.date) !== showYearMonth(historyData[index - 1].date)">
              <a-col span="24" class="text-center my-2"> {{ showYearMonth(history.date) }} </a-col>
            </a-row>
            <a-space>
              <a-card class="w-full min-w-full md:min-w-96" size="small">
                <a-card-meta>
                  <template #title>
                    <a-button :color="history.btnColor">{{ history.title }}</a-button>
                    <span class="text-sm pl-2">{{ history.subTitle }}</span>
                  </template>
                  <template #description>
                    {{ history.content }}
                    <a-divider class="m-1" />
                    <a-row>
                      <a-col :span="12">
                        <a-space>
                          <span>{{ history.createdAt }}</span>
                        </a-space>
                      </a-col>
                      <a-col class="text-right" :span="12">
                        <a-space>
                          <span>{{ history.activityWith }}</span>
                        </a-space>
                      </a-col>
                    </a-row>
                  </template>
                </a-card-meta>
              </a-card>
            </a-space>
          </template>
        </a-step>
        <!-- end foreach 所有歷程 -->
      </a-steps>
    </a-col>
  </a-row>
</template>
