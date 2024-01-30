import { NextFunction, Request, Response } from 'express';
import { jwtGenerator } from '../../config';
import { UserModel } from '../../data';
import { UserEntity } from '../../domain';

export class AuthMiddleware {
  static async validateJWT(req: Request, res: Response, next: NextFunction) {
    const authorization = req.header('Authorization');
    if (!authorization)
      return res.status(401).json({ error: 'token not provided' });
    if (!authorization.startsWith('Bearer'))
      return res.status(401).json({ error: 'invalid token' });

    const token = authorization.split(' ').at(1) || '';

    try {
      const payload = await jwtGenerator.validateTk<{ id: string }>(token);
      if (!payload) return res.status(401).json({ error: 'invalid token' });

      const user = await UserModel.findById(payload.id);
      if (!user) return res.status(401).json({ error: 'Invalid token - user' });

      // Todo: validate if the user is active.

      req.body.user = UserEntity.fromObject(user);

      next();
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'internal server error' });
    }
  }
}
