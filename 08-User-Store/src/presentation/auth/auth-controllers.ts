import { Request, Response } from 'express';
import { AuthService } from '../services/auth-service';
import { CustomError, LoginUserDto, RegisterUserDto } from '../../domain';

export class AuthController {
  // (DI) Here we are inject the auth-service but we don't initialize yet, it will be initialized where we need to use it (into our auth-routes.ts file), therefore this will be done into auth-routes.ts file.
  constructor(public readonly authService: AuthService) {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    console.log(`${error}`);

    return res.status(500).json({ error: 'Internal server error' });
  };

  // Register method //

  register = (req: Request, res: Response) => {
    const [error, registerUserDto] = RegisterUserDto.create(req.body);
    if (error) return res.status(400).json({ error });

    this.authService
      .registerUser(registerUserDto!) // We use the exclamation mark to indicate that we already have the registerUserDto (it is in the 14 line.)
      .then((user) => res.json(user))
      .catch((error) => this.handleError(error, res));
  };

  // Login method //

  login = (req: Request, res: Response) => {
    const [error, loginUserDto] = LoginUserDto.userToLogin(req.body);
    if (error) return res.status(400).json({ error });

    this.authService
      .loginUser(loginUserDto!)
      .then((user) => res.json(user))
      .catch((error) => this.handleError(error, res));
    return;
  };

  // Validate email method //

  validateEmail = (req: Request, res: Response) => {
    // Here we catch the token that comes from the URL

    const { token } = req.params;

    this.authService
      .validateEmailToken(token)
      .then(() => res.json('Email validated throug ngrok service'))
      .catch((error) => this.handleError(error, res));
    return;
  };
}
