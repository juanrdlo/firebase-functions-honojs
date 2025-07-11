import { Hono } from 'hono'
import { serve } from '@hono/node-server' // para correr localmente con Node.js
import barbersV1 from './apis/barbers/barbers'

// Creamos la app principal
const app = new Hono()

app.route('/', barbersV1)

serve(app, (info: any) => {
  console.log(`🚀 API corriendo en http://localhost:${info.port}`)
})
