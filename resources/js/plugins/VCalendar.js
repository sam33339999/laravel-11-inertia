import { createVuetify } from 'vuetify';
import { VCalendar } from 'vuetify/lib/labs/VCalendar/index.mjs'; // 僅引入 VCalendar

const vuetify = createVuetify({
  components: {
    VCalendar, // 只註冊 VCalendar
  },
});

export default vuetify;
