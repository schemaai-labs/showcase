/**
 * query — 展示站查询执行器（runtime-core executeQuery 的 mock 传输版）。
 *
 * 与 runtime-core 的 executeQuery 同语义的部分直接复用（`resolveString` 解析
 * url / params 里的 {{}} 绑定），只把 **传输层换成 mock-api**：
 * - 编辑器的执行器（apps/studio-web）走真实 HTTP + token；
 * - 展示站无后端 → method/url 命中本地 fixture（见 ./mock-api.ts），
 *   返回结构与真实执行器一致：`{ success, data, error?, executionTime }`。
 *
 * 这样 `data.query` / `data.refresh` / 代码轨 `runQuery()` 的**可见行为**
 * （loading → ready/error 的 asyncState 派生、QueryResults 写回、绑定消费）
 * 与平台一致，换掉只是数据来源。
 */

import { resolveString } from '@schemaai/runtime-core';
import type { RuntimeQueryContext } from '@schemaai/runtime-core';
import type { ApiQuery, ExecutionResult } from '@schemaai/schema';

import { mockRequest } from './mock-api.js';

export async function executeQueryMock(
  query: ApiQuery,
  context: RuntimeQueryContext,
): Promise<ExecutionResult> {
  const startTime = Date.now();
  try {
    const rawUrl = String(resolveString(query.url ?? '', context) ?? '');
    if (!rawUrl) throw new Error('URL is required');

    // params（key/value 均支持 {{}} 绑定）→ 查询串（与 runtime-core 同语义）
    const search = new URLSearchParams();
    for (const param of query.params ?? []) {
      if (!param?.key) continue;
      const key = String(resolveString(param.key, context) ?? '');
      const value = String(resolveString(param.value ?? '', context) ?? '');
      search.append(key, value);
    }
    const url = search.toString() ? `${rawUrl}?${search.toString()}` : rawUrl;

    const response = await mockRequest(query.method ?? 'GET', url);
    if (response.status >= 400) {
      return {
        success: false,
        error: `HTTP ${response.status}`,
        data: response.data,
        executionTime: Date.now() - startTime,
      } as ExecutionResult;
    }
    return {
      success: true,
      data: response.data,
      executionTime: Date.now() - startTime,
    } as ExecutionResult;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return {
      success: false,
      error: message,
      executionTime: Date.now() - startTime,
    } as ExecutionResult;
  }
}
