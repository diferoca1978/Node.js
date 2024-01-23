// a DTO is a function, factory function, object or a class, wich is in charge to ensure that the data bringing in the body is correct

export class createTodoDto {
  private constructor(public text: string) {}

  static create(props: { [key: string]: any }): [string?, createTodoDto?] {
    const { text } = props;

    if (!text) return ['text property is required', undefined];

    return [undefined, new createTodoDto(text)];
  }
}
