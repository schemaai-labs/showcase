/**
 * showcase Vite configuration — 平台能力展示站（独立子项目）。
 *
 * 与 studio-web 的差异（有意为之）：
 * - 单入口（index.html），无 importmap、无后端代理——展品数据在构建期静态打包
 *   （scripts/sync-exhibits.mjs），产物是纯静态站；
 * - 端口 3010（studio-web 占 3000）；
 * - SPA history fallback（默认 appType: 'spa'）：/preview/<id> 深链可直达。
 *
 * 注意：本应用的页面路由走 **path**（pushState），不要用 hash——
 * PreviewRuntimeProvider 独占 window.location.hash 做模板内多页路由。
 */

import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const APP_DIR = __dirname;
const APP_SRC_DIR = path.resolve(APP_DIR, 'src');

export default defineConfig({
  root: APP_DIR,
  publicDir: path.resolve(APP_DIR, 'public'),
  server: {
    port: 3010,
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      '@showcase': APP_SRC_DIR,
    },
  },
  build: {
    outDir: path.resolve(APP_DIR, 'dist'),
    emptyOutDir: true,
    chunkSizeWarningLimit: 1500,
  },
  plugins: [react()],
});
