<script setup lang="ts">
import { ref, computed } from 'vue';
import { HomeOutlined, UserOutlined } from '@ant-design/icons-vue';
import Overview from './Overview.vue';
import ContactPerson from './ContactPerson.vue';
const activeKey = ref('2');
</script>

<template>
  <a-card>
    <a-card-meta title="Card title" description="This is the description">
      <template #avatar>
        <a-avatar src="https://joeschmoe.io/api/v1/random" />
      </template>
    </a-card-meta>

    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="總覽">
        <Overview />
      </a-tab-pane>
      <a-tab-pane key="2" tab="聯絡人" force-render>
        <ContactPerson />
      </a-tab-pane>
    </a-tabs>
  </a-card>
</template>
