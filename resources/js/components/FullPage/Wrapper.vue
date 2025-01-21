<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';

const container = ref<HTMLElement | null>(null);
const currentPage = ref(0);
const totalPages = ref(0);
const pages = ref<HTMLElement[]>([]);
const isScrolling = ref(false); // 追蹤滾動狀態

// 定義 props
const props = defineProps({
  navPosition: {
    type: String,
    default: 'right', // 'none', 'left', 'right', 'top', 'bottom'
  },
});

// 更新頁面信息
const updatePages = () => {
  if (container.value) {
    pages.value = Array.from(container.value.children) as HTMLElement[];
    totalPages.value = pages.value.length - 1;
  }
};

// 檢查是否可以導航
const canNavigate = () => {
  const now = Date.now();
  if (now - lastNavigationTime < NAVIGATION_THROTTLE || isScrolling.value) return false;
  lastNavigationTime = now;
  return true;
};

// 滾動到指定頁面
const scrollToPage = (index: number) => {
  if (isScrolling.value) return; // 如果正在滾動中，忽略新的滾動請求

  if (index >= 0 && index < totalPages.value) {
    isScrolling.value = true;
    pages.value[index]?.scrollIntoView({ behavior: 'smooth' });
    currentPage.value = index;

    // 滾動結束後重置狀態
    setTimeout(() => {
      isScrolling.value = false;
    }, 1000); // 配合 smooth scroll 的持續時間
  }
};

const navClasses = computed(() => {
  if (props.navPosition === 'none') return 'hidden';

  const baseClasses = 'flex gap-2 fixed';

  const positionClasses: { [key: string]: string } = {
    left: 'left-4 top-1/2 -translate-y-1/2 flex-col',
    right: 'right-4 top-1/2 -translate-y-1/2 flex-col',
    top: 'top-4 left-1/2 -translate-x-1/2 flex-row',
    bottom: 'bottom-4 left-1/2 -translate-x-1/2 flex-row',
  };

  return `${baseClasses} ${positionClasses[props.navPosition as keyof typeof positionClasses] || ''}`;
});

let touchStartY = 0;
let touchStartTime = 0;
let lastWheelTime = 0;
let lastNavigationTime = 0; // 追蹤最後一次導航時間（包含滾輪、觸控和鍵盤）
const NAVIGATION_THROTTLE = 50; // 節流時間

const handleTouchStart = (e: TouchEvent) => {
  e.preventDefault(); // 阻止默認滾動
  touchStartY = e.touches[0].clientY;
  touchStartTime = Date.now();
};

const handleTouchMove = (e: { preventDefault: () => void }) => {
  e.preventDefault(); // 阻止默認滾動
};

const handleTouchEnd = (e: TouchEvent) => {
  if (!canNavigate()) return; // 如果正在滾動中，忽略新的觸控事件

  const touchEndY = e.changedTouches[0].clientY;
  const deltaY = touchStartY - touchEndY;
  const touchDuration = Date.now() - touchStartTime;

  // 設定最小滑動距離和最大滑動時間
  if (Math.abs(deltaY) > 50 && touchDuration < 300) {
    if (deltaY > 0 && currentPage.value < totalPages.value - 1) {
      scrollToPage(currentPage.value + 1);
    } else if (deltaY < 0 && currentPage.value > 0) {
      scrollToPage(currentPage.value - 1);
    }
  }
};

// 滾輪事件處理
const handleWheel = (e: { preventDefault: () => void; deltaY: number }) => {
  e.preventDefault();

  // 節流處理
  const now = Date.now();
  if (now - lastWheelTime < 100) return; // 忽略100ms內的事件
  lastWheelTime = now;

  if (isScrolling.value) return;

  if (e.deltaY > 0 && currentPage.value < totalPages.value - 1) {
    scrollToPage(currentPage.value + 1);
  } else if (e.deltaY < 0 && currentPage.value > 0) {
    scrollToPage(currentPage.value - 1);
  }
};
// 鍵盤事件處理
const handleKeydown = (e: KeyboardEvent) => {
  // 只處理方向鍵
  if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;

  e.preventDefault();

  if (!canNavigate()) return;

  if (e.key === 'ArrowDown' && currentPage.value < totalPages.value - 1) {
    scrollToPage(currentPage.value + 1);
  } else if (e.key === 'ArrowUp' && currentPage.value > 0) {
    scrollToPage(currentPage.value - 1);
  }
};

onMounted(() => {
  updatePages();
  // 添加 touchmove 事件監聽
  container.value?.addEventListener('touchmove', handleTouchMove, { passive: false });
  container.value?.addEventListener('wheel', handleWheel, { passive: false });
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  container.value?.removeEventListener('touchmove', handleTouchMove);
  container.value?.removeEventListener('wheel', handleWheel);
  window.removeEventListener('keydown', handleKeydown);
});
</script>

<template>
  <div
    ref="container"
    class="h-screen overflow-y-auto snap-y snap-mandatory relative overscroll-none touch-none"
    @touchstart.prevent="handleTouchStart"
    @touchend.prevent="handleTouchEnd"
  >
    <slot></slot>

    <!-- 導航指示器 -->
    <div v-if="props.navPosition !== 'none'" :class="navClasses">
      <button
        v-for="index in totalPages"
        :key="index"
        class="w-3 h-3 rounded-full transition-all duration-300"
        :class="[currentPage === index - 1 ? 'bg-blue-500 scale-125' : 'bg-gray-300 hover:bg-gray-400']"
        @click="scrollToPage(index - 1)"
      />
    </div>
  </div>
</template>

<style scoped>
.overflow-y-auto {
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch; /* 使滾動在 iOS 上更順暢 */
}
.overflow-y-auto::-webkit-scrollbar {
  display: none;
}
</style>
