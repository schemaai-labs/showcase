/**
 * PreviewPage — exhibit preview (`/preview/<id>`).
 *
 * No editor: compile the exhibit's Lang DSL into a page tree and render it through the
 * platform pipeline. Capabilities (motion / nav / data / overlay / event-code sandbox)
 * are provided by the runtime host.
 */

import React from 'react';

import { navigate } from '../app/router.js';
import { findExhibit } from '../exhibits/catalog.js';
import { ExhibitRuntime } from '../runtime/ExhibitRuntime.js';

export const PreviewPage: React.FC<{ exhibitId: string }> = ({ exhibitId }) => {
  const entry = findExhibit(exhibitId);

  if (!entry) {
    return (
      <div className="min-h-screen grid place-items-center bg-ink-900 text-slate-300">
        <div className="text-center space-y-3">
          <p className="text-lg font-semibold">No such exhibit: {exhibitId}</p>
          <p className="text-xs text-slate-500">
            The exhibit catalog is generated at build time (sync:exhibits)
          </p>
          <button
            type="button"
            className="text-sm text-accent-400 hover:text-accent-500"
            onClick={() => navigate('/')}
          >
            ← Back to the gallery
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-ink-900" data-showcase-exhibit={entry.id}>
      <ExhibitRuntime key={entry.id} entry={entry} />
    </div>
  );
};
