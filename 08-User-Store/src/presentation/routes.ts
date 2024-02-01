import { Router } from 'express';
import { AuthRoutes } from './auth/auth-routes';
import { CategoryRoutes } from './category/routes';
import { ProductsRoutes } from './products/routes';
import { FileUploadRoutes } from './file-upload/routes';

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    // Defining routes

    router.use('/api/auth', AuthRoutes.routes);
    router.use('/api/categories', CategoryRoutes.routes);
    router.use('/api/products', ProductsRoutes.routes);
    router.use('/api/upload', FileUploadRoutes.routes);

    return router;
  }
}
