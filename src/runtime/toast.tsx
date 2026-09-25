/**
 * toast — feedback.show 的展示站宿主实现（自研轻提示）。
 *
 * 不用 antd：React 19 + antd 5.16 的静态 message 静默失效是平台已知坑
 * （见 docs/architecture 相关记录）；展示站本来也不引 antd。
 * 视觉与语义对齐 feedback.show（message / notification 两型 + 4 个 subtype + duration）。
 */

import React, { useEffect, useState } from 'react';

export type ToastType = 'message' | 'notification';
export type ToastSubtype = 'success' | 'info' | 'warning' | 'error';

export interface ToastPayload {
  type?: ToastType;
  subtype?: ToastSubtype;
  message?: string;
  description?: string;
  duration?: number;
}

interface ToastItem extends ToastPayload {
  id: number;
}

let seq = 0;
let items: ToastItem[] = [];
const listeners = new Set<(next: ToastItem[]) => void>();

function emit() {
  for (const listener of listeners) listener(items);
}

/** 推送一条轻提示（feedback 适配器调用）。 */
export function pushToast(payload: ToastPayload): void {
  const item: ToastItem = { ...payload, id: (seq += 1) };
  items = [...items, item];
  emit();
  const duration = typeof payload.duration === 'number' ? payload.duration : 2600;
  if (duration > 0) {
    setTimeout(() => dismissToast(item.id), duration);
  }
}

export function dismissToast(id: number): void {
  items = items.filter((item) => item.id !== id);
  emit();
}

const SUBTYPE_STYLE: Record<ToastSubtype, { ring: string; dot: string; label: string }> = {
  success: { ring: 'border-emerald-500/40', dot: 'bg-emerald-400', label: '成功' },
  info: { ring: 'border-sky-500/40', dot: 'bg-sky-400', label: '提示' },
  warning: { ring: 'border-amber-500/40', dot: 'bg-amber-400', label: '警告' },
  error: { ring: 'border-rose-500/40', dot: 'bg-rose-400', label: '错误' },
};

export const ToastHost: React.FC = () => {
  const [list, setList] = useState<ToastItem[]>(items);
  useEffect(() => {
    listeners.add(setList);
    return () => {
      listeners.delete(setList);
    };
  }, []);

  if (list.length === 0) return null;

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-[9999] flex flex-col gap-2 items-center pointer-events-none">
      {list.map((item) => {
        const style = SUBTYPE_STYLE[item.subtype ?? 'info'];
        const wide = item.type === 'notification';
        return (
          <div
            key={item.id}
            className={`pointer-events-auto bg-ink-800/95 backdrop-blur border ${style.ring} rounded-lg shadow-xl px-4 py-3 ${
              wide ? 'w-[360px]' : 'min-w-[200px]'
            } text-slate-100`}
          >
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${style.dot}`} />
              <span className="text-sm font-medium">{item.message ?? style.label}</span>
            </div>
            {wide && item.description ? (
              <p className="mt-1 text-xs text-slate-400 leading-relaxed">{item.description}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};
