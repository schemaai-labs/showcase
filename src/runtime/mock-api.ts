/**
 * mock-api — the showcase's local data plane (no backend).
 *
 * Query definitions inside exhibits (`queries: { orders: { method, url } }`) hit the fixtures in
 * this file by method + path; misses get a deterministic fallback response. **The global fetch is
 * not patched**: the mock only applies inside the showcase's own query executor (./query.ts), so
 * both `runQuery('orders')` in event code and declarative `data.query('orders')` go through the
 * same adapter path.
 *
 * Artificial latency (300–900 ms, deterministic from a path hash) makes skeleton / loading states
 * (asyncState) visible — part of the "data capability" showcase.
 *
 * URL switch: `?mockFail=1` → all queries take the failure branch (demo error state and retry).
 */

export interface MockResponse {
  status: number;
  data: unknown;
}

const ORDER_ROWS = [
  { orderNo: 'SO-2026-0417', amount: 1280, status: 'Shipped', customer: 'Cloudsail Tech' },
  { orderNo: 'SO-2026-0418', amount: 3560, status: 'Pending payment', customer: 'Lumen Studio' },
  { orderNo: 'SO-2026-0419', amount: 820, status: 'Completed', customer: 'Firework Keep' },
  { orderNo: 'SO-2026-0420', amount: 2450, status: 'Completed', customer: 'Woodland Inn' },
  { orderNo: 'SO-2026-0421', amount: 3999, status: 'Shipped', customer: 'Greenfield High' },
  { orderNo: 'SO-2026-0422', amount: 640, status: 'Pending payment', customer: 'MUJI Reseller' },
  { orderNo: 'SO-2026-0423', amount: 1720, status: 'Completed', customer: 'Lighthouse Books' },
  { orderNo: 'SO-2026-0424', amount: 2890, status: 'Refunded', customer: 'Starlit Coffee' },
];

const PRODUCT_ROWS = [
  { name: 'K3 Low-Profile Keyboard', price: 499, stock: 24 },
  { name: 'Monitor Arm Pro', price: 289, stock: 8 },
  { name: 'Air Noise-Cancelling Headphones', price: 899, stock: 41 },
  { name: 'Classic Mechanical Watch', price: 1999, stock: 5 },
  { name: 'Desktop Storage Cabinet', price: 359, stock: 17 },
  { name: 'Typewriter Figurine', price: 128, stock: 63 },
];

const FIXTURES: Array<{
  method: string;
  path: string;
  build: (params: URLSearchParams) => unknown;
}> = [
  {
    method: 'GET',
    path: '/api/orders',
    build: (params) => {
      const keyword = (params.get('keyword') ?? '').trim();
      if (!keyword) return ORDER_ROWS;
      return ORDER_ROWS.filter((row) =>
        `${row.orderNo}${row.customer}${row.status}`.includes(keyword),
      );
    },
  },
  { method: 'GET', path: '/api/orders/count', build: () => ({ count: 128 }) },
  { method: 'GET', path: '/api/products', build: () => PRODUCT_ROWS },
  { method: 'GET', path: '/api/users', build: () => [{ id: 'u1', name: 'Lin Mo' }] },
  { method: 'PUT', path: '/api/users', build: () => ({ saved: true }) },
  {
    method: 'POST',
    path: '/api/favorites/engineering-practice',
    build: () => ({ favorited: true, count: 1287 }),
  },
];

/** Path hash → deterministic latency (300–900 ms). */
function latencyFor(method: string, path: string): number {
  let hash = 0;
  const key = `${method} ${path}`;
  for (let i = 0; i < key.length; i += 1) hash = (hash * 31 + key.charCodeAt(i)) % 997;
  return 300 + (hash % 600);
}

export function isMockFailMode(): boolean {
  if (typeof window === 'undefined') return false;
  return new URLSearchParams(window.location.search).get('mockFail') === '1';
}

/** Execute one mock request (with latency); a miss → fallback response (diagnostic warn). */
export async function mockRequest(
  method: string,
  url: string,
): Promise<MockResponse> {
  const [path, search = ''] = url.split('?');
  const upper = method.toUpperCase();
  await new Promise((resolve) => setTimeout(resolve, latencyFor(upper, path)));

  if (isMockFailMode()) {
    return { status: 500, data: { message: `Mock failure mode (?mockFail=1): ${upper} ${path}` } };
  }

  const fixture = FIXTURES.find((f) => f.method === upper && f.path === path);
  if (fixture) {
    return { status: 200, data: fixture.build(new URLSearchParams(search)) };
  }

  console.warn(`[mock-api] endpoint not modeled ${upper} ${path} — returning fallback response`);
  return { status: 200, data: { ok: true, method: upper, path } };
}
