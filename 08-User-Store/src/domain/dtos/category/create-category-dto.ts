export class CreateCategoryDto {
  private constructor(
    public readonly Name: string,
    public readonly available: boolean
  ) {}

  static create(object: { [key: string]: any }): [string?, CreateCategoryDto?] {
    const { name, available } = object;
    let availableBoolean = available;

    if (!name) return ['Missing name'];
    if (typeof available !== 'boolean') {
      availableBoolean === 'true';
    }

    return [undefined, new CreateCategoryDto(name, availableBoolean)];
  }
}
