//*  This is my todos routes file, wich use the Todoscontroller that have all logic behind to the endpoint.

import { Router } from 'express';
import { TodosController } from './controllers';

export class TodoRoutes {
  static get routes(): Router {
    const router = Router();
    const todoController = new TodosController();

    router.get('/', todoController.getTodos);
    router.get('/:id', todoController.getTtodoById);
    router.post('/', todoController.createTodo);
    router.put('/:id', todoController.updateTodo);
    router.delete('/:id', todoController.deleteTodo);

    return router;
  }
}
