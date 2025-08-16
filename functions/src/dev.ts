import { Hono } from 'hono'
import { serve } from '@hono/node-server' // para correr localmente con Node.js
import { validateHeader } from './routes/middlewares/middlewares'
import barbers from "./apis/v1/barber";
import appRouter from "./routes/routes";

// Creamos la app principal
const app = new Hono()
// Middleware
app.use(async (_, next) => validateHeader(_, next))

// Routes
app.route('/', appRouter)

// Exports para Firebase Functions
export { barbers }

// Server local
serve(app, (info: any) => {
  console.log(`🚀 API corriendo en http://localhost:${info.port}`)
})
