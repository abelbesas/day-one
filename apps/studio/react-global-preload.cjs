/**
 * Preload script to set global React before styled-components loads.
 * styled-components CJS build expects React on global scope during
 * Sanity's manifest extraction (runs in Node worker thread).
 *
 * Usage: NODE_OPTIONS='--require ./react-global-preload.cjs' pnpm sanity deploy
 */
try {
  const React = require('react')
  global.React = React
  if (typeof global.window !== 'undefined') {
    global.window.React = React
  }
} catch {
  // React may not be available in all contexts; ignore
}
