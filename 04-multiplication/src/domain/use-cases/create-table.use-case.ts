//* The main objective of this file is only to create the data of the file.

export interface CreateTableUseCase {
  //? Basically here we are defining the business rules that we want to force to the class to use.

  execute: (options: CreateTableOptions) => string;
}

export interface CreateTableOptions {
  base: number;
  limit: number;
}

export class CreateTable implements CreateTableUseCase {
  constructor() {}

  execute({ base, limit }: CreateTableOptions) {
    let outputMessage = '';
    for (let i = 0; i <= limit; i++) {
      outputMessage += `${base} x ${i} = ${base * i}\n`;
    }
    return outputMessage;
  }
}
