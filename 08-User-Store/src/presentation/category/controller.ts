import { Response, Request } from 'express';
import { CreateCategoryDto, CustomError } from '../../domain';

export class CategoryController {
  constructor() {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    console.log(`${error}`);

    return res.status(500).json({ error: 'Internal server error' });
  };

  // Create Category

  createCategory = async (req: Request, res: Response) => {
    const createCategoryDto = CreateCategoryDto.create(req.body);
    res.json(createCategoryDto);
  };

  // Get categories

  getCategory = async (req: Request, res: Response) => {
    res.json('get category');
  };
}
