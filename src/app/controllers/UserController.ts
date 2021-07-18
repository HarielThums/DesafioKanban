import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
require('dotenv').config();

function GenerateToken(params = {}) {
  return jwt.sign(params, global.process.env.SECRET, {
    expiresIn: 86400,
  });
}

interface User {
  name: string;
  password: string;
}

export async function authenticate(req: Request, res: Response): Promise<Response> {
  try {
    const { name, password }: User = req.body;

    if (name !== global.process.env.USER_NAME) // id
      return res.status(400).send({ message: 'User not found' });

    if (!(await bcrypt.compare(password, global.process.env.USER_PASSWORD))) return res.status(400).send({ message: 'Invalid Password' });

    return res.send({ token: GenerateToken({ name }) }); // id
  } catch (err) {
    return res.status(400).send({ message: 'Login Failed' });
  }
}
