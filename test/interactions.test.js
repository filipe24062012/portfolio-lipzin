import test from 'node:test'
import assert from 'node:assert/strict'
import { counterDisplay, menuState, modalState } from '../src/utils/interactions.js'

test('mobile menu reports and updates its state', () => {
  assert.deepEqual(menuState(false, 'toggle'), { open: true, ariaExpanded: 'true', hiddenFromInteraction: false })
  assert.deepEqual(menuState(true, 'navigate'), { open: false, ariaExpanded: 'false', hiddenFromInteraction: true })
})

test('modal closes with escape and requests focus restoration', () => {
  assert.deepEqual(modalState({ open: true, highlightId: 'ace-ascent' }, 'escape'), {
    open: false,
    highlightId: null,
    restoreFocus: true,
  })
  assert.deepEqual(modalState({ open: true, highlightId: 'ace-ascent' }, 'cancel'), {
    open: false,
    highlightId: null,
    restoreFocus: true,
  })
  assert.equal(modalState({ open: true, highlightId: 'ace-ascent' }, { type: 'click' }).open, false)
})

test('reduced motion disables animated counters', () => {
  assert.equal(counterDisplay({ reducedMotion: true, visible: false, value: '267' }), '267')
  assert.equal(counterDisplay({ reducedMotion: false, visible: false, value: '267' }), '0')
})
