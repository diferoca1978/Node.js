import { Response, Request } from 'express';
import { CreateCategoryDto, CustomError } from '../../domain';
import { CategoryService } from '../services/category-service';
import { CategoryModel } from '../../data';

export class CategoryController {
  //DI
  constructor(private readonly categoryService: CategoryService) {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    console.log(`${error}`);

    return res.status(500).json({ error: 'Internal server error' });
  };

  // Create Category

  createCategory = (req: Request, res: Response) => {
    const [error, createCategoryDto] = CreateCategoryDto.create(req.body);
    if (error) return res.status(400).json(`${error}`);

    res.json(createCategoryDto);

    this.categoryService
      .createCategory(createCategoryDto!, req.body.user)
      .then((category) => res.status(201).json(category))
      .catch((error) => this.handleError(error, res));
  };

  // Get categories

  getcategories = async (req: Request, res: Response) => {
    this.categoryService
      .getCategories()
      .then((categories) => res.json(categories))
      .catch((error) => this.handleError(error, res));
  };
}
