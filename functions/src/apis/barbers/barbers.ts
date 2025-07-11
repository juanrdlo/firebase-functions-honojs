import { Hono } from 'hono'
import { getAllBarbers } from './services/getAllBarbers'

// Version 1 de la API de barberos
const barbersV1 = new Hono().basePath('/v1/barber')
barbersV1.get('/', getAllBarbers)

export default barbersV1
