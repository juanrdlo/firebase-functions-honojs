import type { Hono } from 'hono'
import type { Request, Response } from 'firebase-functions/v1'

export const honoToFirebase = (app: Hono) => {
  return async (req: Request, res: Response) => {
    try {
      const body =
        ['GET', 'HEAD'].includes(req.method) ? undefined : JSON.stringify(req.body)

      const request = new globalThis.Request(`https://${req.hostname}${req.url}`, {
        method: req.method,
        headers: req.headers as any,
        body,
      })

      const response = await app.fetch(request)

      res.status(response.status)
      response.headers.forEach((value, key) => res.setHeader(key, value))
      const text = await response.text()
      res.send(text)
    } catch (err) {
      console.error(err)
      res.status(500).send('Error interno del servidor')
    }
  }
}
