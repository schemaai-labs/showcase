/**
 * App — 展示站根（两页路由）。
 */

import React from 'react';

import { useRoute, navigate } from './router.js';
import { GalleryPage } from '../pages/GalleryPage.js';
import { PreviewPage } from '../pages/PreviewPage.js';

export const App: React.FC = () => {
  const route = useRoute();

  if (route.name === 'preview') {
    return <PreviewPage exhibitId={route.exhibitId} />;
  }
  if (route.name === 'notFound') {
    return (
      <div className="min-h-screen grid place-items-center bg-ink-900 text-slate-300">
        <div className="text-center">
          <p className="text-lg font-semibold mb-2">页面不存在</p>
          <button
            type="button"
            className="text-sm text-accent-400 hover:text-accent-500"
            onClick={() => navigate('/')}
          >
            ← 回到模板画廊
          </button>
        </div>
      </div>
    );
  }
  return <GalleryPage />;
};
