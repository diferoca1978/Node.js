import { Validators } from '../../../config';

export class CreateProductDto {
  private constructor(
    public readonly name: string,
    public readonly available: boolean,
    public readonly price: number,
    public readonly description: string,
    public readonly user: string, // The only thing that we need of user is the id.
    public readonly category: string // The only thing that we need of category is the id.
  ) {}

  // Create //

  static create(object: { [key: string]: any }): [string?, CreateProductDto?] {
    const { name, available, price, description, user, category } = object;

    if (!name) return ['Missing name'];
    if (!price) return ['Missing price'];
    if (price <= 0) return ['Price must be bigger than 0'];
    if (!description) return ['Missing description'];
    if (!user) return ['Missing user'];
    if (!Validators.isMongoID(user)) return ['invalid User ID'];
    if (!category) return ['Missing category'];
    if (!Validators.isMongoID(category)) return ['invalid Category ID'];

    return [
      undefined,
      new CreateProductDto(
        name,
        !!available,
        price,
        description,
        user,
        category
      ),
    ];
  }
}
