import { Hono } from 'hono'
import { serve } from '@hono/node-server' // para correr localmente con Node.js
import { validateHeader } from './middlewares/middlewares'
import barbersV1 from './apis/barbers/barbers'

// Creamos la app principal
const app = new Hono()
// Middleware
app.use(async (_, next) => validateHeader(_, next))

// Routes
app.route('/v1/barber', barbersV1)


// Exports para Firebase Functions
export { barbersV1 }

// Server local
serve(app, (info: any) => {
  console.log(`🚀 API corriendo en http://localhost:${info.port}`)
})
