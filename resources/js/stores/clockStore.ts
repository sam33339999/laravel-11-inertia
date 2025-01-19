import { defineStore } from 'pinia';
import { queryClock } from '@/js/services/ClockService';

export const useClockStore = defineStore({
  id: 'clock',
  state: () => ({
    clockIn: '',
    clockOut: '',
    inPosition: '',
    outPosition: '',
  }),
  actions: {
    async queryClock(location: string, type: 'in' | 'out') {
      return queryClock(location, type);
    },
  },
});
