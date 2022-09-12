import { Request, Response } from 'express'

const notFound = (_req: Request, res: Response): void => {
  res.status(404).json({ error: 'Endpoint not found' }).end()
}

export default notFound
