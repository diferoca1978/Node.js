//* This is my app routes file, wich use all routes that we have created as a middleware.

import { Router } from 'express';
import { TodoRoutes } from './todos/routes';

/* The AppRoutes class exports a getter static method that returns a router object. */
export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use('/api/todos', TodoRoutes.routes);

    return router;
  }
}
