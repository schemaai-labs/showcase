/**
 * mock-api — 展示站本地数据面（无后端）。
 *
 * 展品里的查询定义（`queries: { orders: { method, url } }`）按 method + path
 * 命中本文件的 fixture；未命中给确定性兜底响应。**不 patch 全局 fetch**：
 * mock 只在展示站自己的 query 执行器（./query.ts）里生效，事件代码里的
 * `runQuery('orders')` 与声明式 `data.query('orders')` 都经同一适配器路径。
 *
 * 人为延迟（300~900ms，与路径哈希确定）让骨架/加载态（asyncState）可见——
 * 这是「数据能力」展示的一部分。
 *
 * URL 开关：`?mockFail=1` → 全部查询走失败分支（demo 错误态与重试）。
 */

export interface MockResponse {
  status: number;
  data: unknown;
}

const ORDER_ROWS = [
  { orderNo: 'SO-2026-0417', amount: 1280, status: '已发货', customer: '云帆科技' },
  { orderNo: 'SO-2026-0418', amount: 3560, status: '待付款', customer: '拾光影像' },
  { orderNo: 'SO-2026-0419', amount: 820, status: '已完成', customer: '焰火堡' },
  { orderNo: 'SO-2026-0420', amount: 2450, status: '已完成', customer: '林间民宿' },
  { orderNo: 'SO-2026-0421', amount: 3999, status: '已发货', customer: '青禾中学' },
  { orderNo: 'SO-2026-0422', amount: 640, status: '待付款', customer: 'MUJI 代购' },
  { orderNo: 'SO-2026-0423', amount: 1720, status: '已完成', customer: '灯塔书店' },
  { orderNo: 'SO-2026-0424', amount: 2890, status: '已退款', customer: '星野咖啡' },
];

const PRODUCT_ROWS = [
  { name: '键盘 K3 矮轴', price: 499, stock: 24 },
  { name: '显示器支架 Pro', price: 289, stock: 8 },
  { name: '降噪耳机 Air', price: 899, stock: 41 },
  { name: '机械腕表 Classic', price: 1999, stock: 5 },
  { name: '桌面收纳柜', price: 359, stock: 17 },
  { name: '打字机摆件', price: 128, stock: 63 },
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
  { method: 'GET', path: '/api/users', build: () => [{ id: 'u1', name: '林默' }] },
  { method: 'PUT', path: '/api/users', build: () => ({ saved: true }) },
  {
    method: 'POST',
    path: '/api/favorites/engineering-practice',
    build: () => ({ favorited: true, count: 1287 }),
  },
];

/** 路径哈希 → 确定延迟（300~900ms）。 */
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

/** 执行一次 mock 请求（含延迟）；未命中 → 兜底响应（可诊断 warn）。 */
export async function mockRequest(
  method: string,
  url: string,
): Promise<MockResponse> {
  const [path, search = ''] = url.split('?');
  const upper = method.toUpperCase();
  await new Promise((resolve) => setTimeout(resolve, latencyFor(upper, path)));

  if (isMockFailMode()) {
    return { status: 500, data: { message: `Mock 失败态（?mockFail=1）：${upper} ${path}` } };
  }

  const fixture = FIXTURES.find((f) => f.method === upper && f.path === path);
  if (fixture) {
    return { status: 200, data: fixture.build(new URLSearchParams(search)) };
  }

  console.warn(`[mock-api] 未建模端点 ${upper} ${path} —— 返回兜底响应`);
  return { status: 200, data: { ok: true, method: upper, path } };
}
