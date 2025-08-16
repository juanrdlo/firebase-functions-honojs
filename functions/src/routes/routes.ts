// Creamos la app principal
import {Hono} from "hono";
import {barbers} from "../dev";
const appRouter = new Hono()


appRouter.route('/v1/barber', barbers)


export default appRouter
