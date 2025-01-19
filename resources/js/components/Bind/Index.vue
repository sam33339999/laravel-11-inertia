<script setup lang="ts">
import { ref, computed } from 'vue';
import { UserOutlined, ProfileOutlined, LinkOutlined } from '@ant-design/icons-vue';

const current = ref(0);
</script>

<template>
  <a-steps direction="vertical" :current="current">
    <a-step @click="current = 0">
      <template #icon>
        <UserOutlined />
      </template>
      <template #title>填寫基本資料</template>
      <template #description>基本資料完成！</template>
    </a-step>
    <a-step @click="current = 1">
      <template #icon>
        <ProfileOutlined />
      </template>
      <template #title>點擊連結進行綁定</template>
      <template #description>綁定使用者</template>
    </a-step>
    <a-step @click="current = 2">
      <template #icon>
        <LinkOutlined />
      </template>
      <template #title>完成</template>
      <template #description>綁定完成！</template>
    </a-step>
  </a-steps>
</template>
