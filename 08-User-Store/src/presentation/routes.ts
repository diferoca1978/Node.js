import { Router } from 'express';
import { AuthRoutes } from './auth/auth-routes';
import { CategoryRoutes } from './category/routes';
import { ProductsRoutes } from './products/routes';

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    // Defining routes

    router.use('/api/auth', AuthRoutes.routes);
    router.use('/api/categories', CategoryRoutes.routes);
    router.use('/api/products', ProductsRoutes.routes);

    return router;
  }
}
