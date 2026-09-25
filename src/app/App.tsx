/**
 * App — showcase root (two-page router).
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
          <p className="text-lg font-semibold mb-2">Page not found</p>
          <button
            type="button"
            className="text-sm text-accent-400 hover:text-accent-500"
            onClick={() => navigate('/')}
          >
            ← Back to the gallery
          </button>
        </div>
      </div>
    );
  }
  return <GalleryPage />;
};
