import request from '@/js/utils/request';

export async function queryClock(location: string, type: 'in' | 'out') {
  return request.post('/api/clock', { type, location });
}
