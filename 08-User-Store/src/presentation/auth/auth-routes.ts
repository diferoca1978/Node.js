import { Router } from 'express';
import { AuthController } from './auth-controllers';
import { AuthService, EmailService } from '../services';
import { envs } from '../../config';

export class AuthRoutes {
  static get routes(): Router {
    const router = Router();

    // DI email-service

    const emailService = new EmailService(
      envs.MAILER_SERVICE,
      envs.MAILER_EMAIL,
      envs.MAILER_SECRET_KEY,
      envs.SEND_MAIL
    );

    const authService = new AuthService(emailService);

    const controller = new AuthController(authService);

    // Definig routes
    router.post('/login', controller.login);
    router.post('/register', controller.register);
    router.get('/validate-email/:token', controller.validateEmail);

    return router;
  }
}
