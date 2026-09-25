/**
 * main — showcase entry point.
 *
 * Registers **all canonical component renderers** on startup (@schemaai/renderer-react's
 * registerCanonicalComponents: 55 types, zero antd dependency) — the sole startup precondition
 * of the platform rendering pipeline.
 */

import React from 'react';
import { createRoot } from 'react-dom/client';
import { registerCanonicalComponents } from '@schemaai/renderer-react';

import { App } from './app/App.js';

registerCanonicalComponents();

const container = document.getElementById('root');
if (!container) throw new Error('#root not found');

createRoot(container).render(<App />);
