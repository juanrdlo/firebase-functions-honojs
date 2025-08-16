import { Context } from "hono"
import { BlankEnv } from "hono/types"

export const middlewareAuth = async (_: Context<BlankEnv, never>, next: any) => {
    console.log('Middleware Auth')
    await next()
}
