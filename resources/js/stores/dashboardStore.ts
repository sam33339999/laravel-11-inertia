import { defineStore } from 'pinia';

export const useDashboardStore = defineStore('collapsed', {
  state: () => ({
    collapsed: false,
    selectedKeys: [] as string[],
    menu: [] as any[],
    profile: {} as any,
  }),
  actions: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    setSelectedKeys(keys: string[]) {
      this.selectedKeys = keys;
    },
  },
});
