import { Hono } from 'hono'
import { serve } from '@hono/node-server' // para correr localmente con Node.js
import barbers from "./apis/barbers/barbers";

// Creamos la app principal
const app = new Hono()

app.route('/', barbers)


serve(app, (info: any) => {
  console.log(`🚀 API corriendo en http://localhost:${info.port}`)
})
