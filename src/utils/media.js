export function agentArtState(status) {
  return {
    showImage: status !== 'error',
    fallbackLabel: 'CHAMBER',
  }
}
