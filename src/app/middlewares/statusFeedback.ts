import { NextFunction, Request, Response } from 'express';

export async function feedback(req: Request, res: Response, next: NextFunction) {
  const method = req.method === 'PUT' ? 'Alterado' : 'Removido';

  console.log(`${res.locals.date} - Card ${req.params.id} - ${res.locals.CardTitle} - ${method}`);

  next();
}
