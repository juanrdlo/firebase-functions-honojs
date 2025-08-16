// Creamos la app principal
import {Hono} from "hono";
import barbers from "../apis/v1/barber";
const appRouter = new Hono()

// Routes
appRouter.route('/v1/barber', barbers)


export default appRouter
