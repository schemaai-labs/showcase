/**
 * router — the showcase's minimal path router (~40 lines, no react-router).
 *
 * Two routes:
 *   /                 template gallery
 *   /preview/<id>     exhibit preview page
 *
 * **Path routing (pushState) is mandatory, not hash**: PreviewRuntimeProvider takes exclusive
 * ownership of window.location.hash as the routePath carrier for "multi-page inside a template"
 * (packages/renderer-react/src/preview/runtime-provider.tsx hooks hashchange).
 */

import { useEffect, useState } from 'react';

export type Route = { name: 'gallery' } | { name: 'preview'; exhibitId: string } | { name: 'notFound' };

export function parseRoute(pathname: string): Route {
  const path = pathname.replace(/\/+$/, '') || '/';
  if (path === '/') return { name: 'gallery' };
  const match = path.match(/^\/preview\/([^/]+)$/);
  if (match) return { name: 'preview', exhibitId: decodeURIComponent(match[1]) };
  return { name: 'notFound' };
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(() => parseRoute(window.location.pathname));
  useEffect(() => {
    const onChange = () => setRoute(parseRoute(window.location.pathname));
    window.addEventListener('popstate', onChange);
    return () => window.removeEventListener('popstate', onChange);
  }, []);
  return route;
}

export function navigate(to: string): void {
  if (window.location.pathname === to) return;
  window.history.pushState({}, '', to);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

/** Preview page URL (the gallery card entry point). */
export function previewPath(exhibitId: string): string {
  return `/preview/${encodeURIComponent(exhibitId)}`;
}
