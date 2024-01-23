import { Request, Response } from 'express';
import { prisma } from '../../data/postgres/index';
import { createTodoDto, updateTodoDto } from '../../domain/dtos';

export class TodosController {
  //* DI

  constructor() {}

  //* Get all

  public getTodos = async (req: Request, res: Response) => {
    const allTodos = await prisma.todo.findMany();

    return res.json(allTodos);
  };

  //* Get by ID

  public getTtodoById = async (req: Request, res: Response) => {
    //* this the way without DB

    /*const id = +req.params.id; // With the plus simbol before the request we are already have made the conversion process, because of all that comes into URL comes as a string, and we need to receive a number
    const todo = todos.find((row) => row.id === id);
    if (isNaN(id))
      return res.status(400).json({ error: `ID argument should be a number` });

    todo
      ? res.json(todo)
      : res.status(404).json({ error: `Todo with id:${id} not found` });*/

    //* This is the way within DB

    const id = +req.params.id;

    const oneTodo = await prisma.todo.findFirst({
      where: { id },
    });

    oneTodo
      ? res.json(oneTodo)
      : res.status(404).json({ error: `TODO with id: ${id} not found` });
  };

  //* Create

  public createTodo = async (req: Request, res: Response) => {
    const [error, createTodo] = createTodoDto.create(req.body);
    if (error) return res.status(400).json({ error });

    const todo = await prisma.todo.create({
      data: createTodo!,
    });

    res.json(todo);
  };

  //* Update

  public updateTodo = async (req: Request, res: Response) => {
    //* using DB
    const id = +req.params.id;
    const [error, updateTodo] = updateTodoDto.update({
      ...req.body,
      id,
    });
    if (error) return res.status(400).json({ error });

    const oneTodo = await prisma.todo.findFirst({
      where: { id },
    });

    if (!oneTodo)
      return res.status(404).json({ error: `Todo with id:${id} not found` });

    const updatedTodo = await prisma.todo.update({
      where: { id },
      data: updateTodo!.values,
    });

    res.json(updatedTodo);
  };

  //* Delete

  public deleteTodo = async (req: Request, res: Response) => {
    const id = +req.params.id;

    const oneTodo = await prisma.todo.findFirst({
      where: { id },
    });

    if (!oneTodo)
      return res.status(404).json({ error: `todo whit id ${id} not found` });

    const deletedTodo = await prisma.todo.delete({
      where: { id },
    });

    deletedTodo
      ? res.json(deletedTodo)
      : res.status(404).json({ error: `Todo with id: ${id} not found` });
  };
}
