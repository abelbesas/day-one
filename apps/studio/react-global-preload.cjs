try {
  const React = require('react')
  global.React = React
  if (typeof global.window !== 'undefined') {
    global.window.React = React
  }
} catch {
}
