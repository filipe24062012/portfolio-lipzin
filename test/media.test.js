import test from 'node:test'
import assert from 'node:assert/strict'
import { agentArtState } from '../src/utils/media.js'

test('keeps hero content available when agent art fails', () => {
  const failedState = agentArtState('error')

  assert.deepEqual(failedState, {
    showImage: false,
    fallbackLabel: 'CHAMBER',
  })
})
