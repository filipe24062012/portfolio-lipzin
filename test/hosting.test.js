import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

test('hosting manifest targets the static build output', async () => {
  const manifest = JSON.parse(await readFile('.openai/hosting.json', 'utf8'))
  assert.equal(typeof manifest.project_id, 'string')
  assert.ok(manifest.project_id.length > 0)
  assert.deepEqual(manifest.static, { directory: 'dist' })
})
