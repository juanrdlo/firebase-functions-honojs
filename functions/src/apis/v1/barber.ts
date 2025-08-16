import { Hono } from 'hono'
import {getAllBarbers} from "../../controllers/barber-controller";
import {middlewareAuth} from "../../routes/middlewares/middlewares";
const barbers = new Hono()

// Middleware
barbers.use(middlewareAuth)

// ROUTES
barbers.get('/', getAllBarbers)

// export default barbersV1
export default barbers
