import { serve } from '@hono/node-server'
import {serveStatic} from '@hono/node-server/serve-static'
import { Hono } from 'hono'
import {fileURLToPath} from 'node:url'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.use('/static', serveStatic({ path: './assets/site1.html' }))

app.get('/entry/:id',(c) => {
  const id = c.req.param('id');
  return c.json({
    message: "your id is :" + id,
    // remoteAddress: c.env.incoming.socket.remoteAddress
  })
})

app.get('/html/:id',(c) => {
  const id = c.req.param('id');
  return c.text('<h1>Heyy this is html page</h1>');
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
