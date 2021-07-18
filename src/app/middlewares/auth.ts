import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

export async function Auth(req: Request, res: Response, next: NextFunction) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) return res.status(401).send({ error: 'No token provided' });

    const split = authHeader.split(' ');

    const [scheme, token] = split;

    if (!/^Bearer$/.test(scheme) || split.length !== 2) return res.status(401).send({ error: 'Token error' });

    verify(token, process.env.SECRET, (err, decoded) => {
      if (err) return res.status(401).send({ error: 'Invalid token' });

      req.userName = decoded.name; // req.userId = decoded.id

      return next();
    });
  } catch (error) {
    console.log(error);
  }
}
