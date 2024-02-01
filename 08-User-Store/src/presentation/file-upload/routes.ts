import { Router } from 'express';
import { FileUploadController } from './controller';
import { FileUploadService } from '../services/file-upload-service';
import { FileUploadMiddleware, TypeMiddleware } from '../middlewares';

export class FileUploadRoutes {
  static get routes(): Router {
    const router = Router();

    const controller = new FileUploadController(new FileUploadService());

    // Middleware: this will run on the two routes below without to need set it between the path and the controller.

    router.use(FileUploadMiddleware.containFiles);
    router.use(TypeMiddleware.validTypes(['users', 'categories', 'products']));

    // Defining routes
    router.post('/single/:type', controller.uploadFile);
    router.post('/multiple/:type', controller.uploadMultipleFiles);

    return router;
  }
}
