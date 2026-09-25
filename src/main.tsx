/**
 * main — 展示站入口。
 *
 * 启动即注册**全部 canonical 组件渲染器**（@schemaai/renderer-react 的
 * registerCanonicalComponents：55 个类型，零 antd 依赖）——平台渲染链路的
 * 唯一启动前提。
 */

import React from 'react';
import { createRoot } from 'react-dom/client';
import { registerCanonicalComponents } from '@schemaai/renderer-react';

import { App } from './app/App.js';

registerCanonicalComponents();

const container = document.getElementById('root');
if (!container) throw new Error('#root not found');

createRoot(container).render(<App />);
