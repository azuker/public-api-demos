import { UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import * as jwt from 'jsonwebtoken';

const JWT_SECRET = 'SECURED_SECRET_HERE';

export function verify(req: Request): object | string {
  const token = req.headers.authorization?.substring('Bearer '.length);
  if (!token) throw new UnauthorizedException('missing token');

  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    throw new UnauthorizedException('invalid token');
  }
}
