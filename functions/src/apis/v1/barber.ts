import { Hono } from 'hono'
import {getAllBarbers} from "../../controllers/barber-controller";

// Version 1 de la API de barberos
const barbers = new Hono()

// ROUTES
barbers.get('/', getAllBarbers)

// export default barbersV1
export default barbers
