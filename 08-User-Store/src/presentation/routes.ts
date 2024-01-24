import { Router } from 'express';
import { AuthRoutes } from './auth/auth-routes';
import { CategoryRoutes } from './category/routes';

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    // Defining routes

    router.use('/api/auth', AuthRoutes.routes);
    router.use('/api/categories', CategoryRoutes.routes);

    return router;
  }
}
