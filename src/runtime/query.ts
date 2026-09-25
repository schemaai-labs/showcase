/**
 * query — the showcase's query executor (mock-transport version of runtime-core's executeQuery).
 *
 * Parts with the same semantics as runtime-core's executeQuery are reused directly (`resolveString`
 * resolving {{}} bindings in url / params); only the **transport is swapped for mock-api**:
 * - the editor's executor (apps/studio-web) uses real HTTP + tokens;
 * - the showcase has no backend → method/url hit a local fixture (see ./mock-api.ts), returning
 *   the same structure as the real executor: `{ success, data, error?, executionTime }`.
 *
 * This keeps the **visible behavior** of `data.query` / `data.refresh` / code-track `runQuery()`
 * identical to the platform (asyncState derivation loading → ready/error, QueryResults write-back,
 * binding consumption) — only the data source is swapped out.
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

    // params (both key and value support {{}} bindings) → query string (same semantics as runtime-core)
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
