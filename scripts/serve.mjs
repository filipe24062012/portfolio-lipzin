import { createReadStream } from 'node:fs'
import { stat } from 'node:fs/promises'
import { createServer } from 'node:http'
import { extname, join, normalize } from 'node:path'

const root = process.cwd()
const types = { '.css': 'text/css', '.html': 'text/html', '.js': 'text/javascript', '.png': 'image/png', '.svg': 'image/svg+xml' }

createServer(async (request, response) => {
  const pathname = request.url === '/' ? '/index.html' : request.url.split('?')[0]
  const file = normalize(join(root, pathname))
  if (!file.startsWith(root)) {
    response.writeHead(403).end('Forbidden')
    return
  }
  try {
    await stat(file)
    response.writeHead(200, { 'Content-Type': `${types[extname(file)] || 'application/octet-stream'}; charset=utf-8` })
    createReadStream(file).pipe(response)
  } catch {
    response.writeHead(404).end('Not found')
  }
}).listen(4173, '127.0.0.1', () => console.log('Preview: http://127.0.0.1:4173'))
