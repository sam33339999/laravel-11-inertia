<script setup lang="ts">
import { ref, computed } from 'vue';
import { HomeOutlined, UserOutlined } from '@ant-design/icons-vue';

interface ContactPerson {
  name: string;
  title: string;
  phone: string;
  email: string;
}

const contactPersonData: ContactPerson[] = [
  {
    name: '謝查理',
    title: '業務部',
    phone: '0912345678',
    email: '',
  },
  {
    name: '王總',
    title: '總經理',
    phone: '0912345678',
    email: '',
  },
  {
    name: '林小姐',
    title: '業務部',
    phone: '0912345678',
    email: '',
  },
  {
    name: '研發張先生',
    title: '研發部',
    phone: '0912345678',
    email: '',
  },
  {
    name: '研發張先生',
    title: '研發部',
    phone: '0912345678',
    email: '',
  },
  {
    name: '研發張先生',
    title: '研發部',
    phone: '0912345678',
    email: '',
  },
  {
    name: '研發張先生',
    title: '研發部',
    phone: '0912345678',
    email: '',
  },
  {
    name: '研發張先生',
    title: '研發部',
    phone: '0912345678',
    email: '',
  },
  {
    name: '研發張先生',
    title: '研發部',
    phone: '0912345678',
    email: '',
  },
];
</script>

<template>
  <a-row>
    <a-col :xs="{ span: 24 }" :lg="{ span: 6 }" class="p-1 overflow-y-scroll max-h-[150px] md:max-h-[500px]">
      <a-card size="small" v-for="contact in contactPersonData" class="hover:bg-gray-200 cursor-pointer mb-2">
        <template #extra> Call Me ! </template>
        <a-avatar :size="64" shape="square"></a-avatar>
        {{ contact.name }} {{ contact.title }}
      </a-card>
    </a-col>
    <a-col :xs="{ span: 24 }" :lg="{ span: 18 }" class="p-1">
      <a-card class="min-h-[500px]">
        <a href="tel:+886911102479">call</a>
      </a-card>
    </a-col>
  </a-row>
</template>
