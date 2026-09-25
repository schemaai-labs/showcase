/**
 * toast — the showcase host implementation of feedback.show (a small homegrown toast).
 *
 * Not using antd: the silent failure of antd 5.16's static message under React 19 is a known
 * platform trap (see the docs/architecture notes); the showcase does not depend on antd anyway.
 * Visuals and semantics align with feedback.show (message / notification types + 4 subtypes + duration).
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

/** Push a toast (called by the feedback adapter). */
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
  success: { ring: 'border-emerald-500/40', dot: 'bg-emerald-400', label: 'Success' },
  info: { ring: 'border-sky-500/40', dot: 'bg-sky-400', label: 'Info' },
  warning: { ring: 'border-amber-500/40', dot: 'bg-amber-400', label: 'Warning' },
  error: { ring: 'border-rose-500/40', dot: 'bg-rose-400', label: 'Error' },
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
