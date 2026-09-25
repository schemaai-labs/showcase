/**
 * router — 展示站最小 path 路由（~/40 行，不引 react-router）。
 *
 * 两个页面：
 *   /                 模板画廊
 *   /preview/<id>     展品预览页
 *
 * **必须用 path（pushState），不要用 hash**：PreviewRuntimeProvider 独占
 * window.location.hash 作为「模板内多页」的 routePath 载体
 * （packages/renderer-react/src/preview/runtime-provider.tsx 挂 hashchange）。
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

/** 预览页 URL（画廊卡片入口）。 */
export function previewPath(exhibitId: string): string {
  return `/preview/${encodeURIComponent(exhibitId)}`;
}
