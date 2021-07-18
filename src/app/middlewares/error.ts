import { NextFunction, Request, Response } from 'express';
import 'express-async-errors';

export function errorMiddleware(err: Error, req: Request, res: Response, next: NextFunction) {
  if (err instanceof Error) return res.status(400).send({ error: err.message });

  return res.status(500).send({ status: 'error', message: 'Internal server error' });
}
