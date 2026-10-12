export function menuState(open, action) {
  const nextOpen = action === 'toggle' ? !open : action === 'navigate' ? false : open
  return { open: nextOpen, ariaExpanded: String(nextOpen) }
}

export function modalState(state, action) {
  if (action === 'escape' || action === 'close') {
    return { open: false, highlightId: null, restoreFocus: true }
  }
  return state
}

export function counterDisplay({ reducedMotion, visible, value }) {
  return reducedMotion || visible ? value : '0'
}
