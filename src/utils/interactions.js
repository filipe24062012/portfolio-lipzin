export function menuState(open, action) {
  const nextOpen = action === 'toggle' ? !open : action === 'navigate' ? false : open
  return { open: nextOpen, ariaExpanded: String(nextOpen), hiddenFromInteraction: !nextOpen }
}

export function modalState(state, action) {
  const actionType = typeof action === 'string' ? action : action?.type
  if (actionType === 'escape' || actionType === 'close' || actionType === 'cancel' || actionType === 'click') {
    return { open: false, highlightId: null, restoreFocus: true }
  }
  return state
}

export function counterDisplay({ reducedMotion, visible, value }) {
  return reducedMotion || visible ? value : '0'
}
