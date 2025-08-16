import { Hono } from 'hono'
import { serve } from '@hono/node-server' // para correr localmente con Node.js
import appRouter from "./routes/routes";

// Creamos la app principal
const app = new Hono()

// Routes
app.route('/', appRouter)

// Server local
serve(app, (info: any) => {
  console.log(`🚀 API corriendo en http://localhost:${info.port}`)
})