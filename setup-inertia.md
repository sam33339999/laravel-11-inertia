# Laravel 11 Vite Inertia.js Vue3

## Frontend Setup

### 安裝依賴
```bash
pnpm install vite laravel-vite-plugin @vitejs/plugin-vue vue
pnpm install pinia
```

### 設定 vite.config.js
```javascript
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        vue(), // 這裡加載 vue 插件
    ],
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
        return pages[`./Pages/${name}.vue`] // 這邊使用 inertia 進行加載
    },
});

```
