/**
 * showcase Vite configuration — the platform capability showcase (a standalone sub-project).
 *
 * Deliberate differences from studio-web:
 * - single entry (index.html), no importmap, no backend proxy — exhibit data is bundled
 *   statically at build time (scripts/sync-exhibits.mjs), producing a purely static site;
 * - port 3010 (studio-web owns 3000);
 * - SPA history fallback (default appType: 'spa'): /preview/<id> deep links work directly.
 *
 * Note: page routing in this app uses **path** (pushState), not hash —
 * PreviewRuntimeProvider takes exclusive ownership of window.location.hash for in-template
 * multi-page routing.
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
