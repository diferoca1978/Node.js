//* the objective of (server.app.ts) is to say how to will work our application.

import { CreateTable } from '../domain/use-cases/create-table.use-case';
import { SaveFile } from '../domain/use-cases/save-file.use-case';

//? an interface is a group of rules that we want to assign to an object

interface runOptions {
  fileName: string;
  fileDestination: string;
  base: number;
  limit: number;
  displayTable: boolean;
}
export class serverApp {
  static run({
    base,
    limit,
    displayTable,
    fileDestination,
    fileName,
  }: runOptions) {
    console.log('Server running...');

    const table = new CreateTable().execute({ base, limit });
    const wasCreated = new SaveFile().execute({
      fileContent: table,
      fileDestination,
      fileName,
    });

    displayTable ? console.log(table) : '';

    wasCreated
      ? console.log('File created 🆗')
      : console.error(`❌ File wasn't created`);
  }
}

//? Now through our execute() method which had brought from use-cases, we can change the options that we needed, for instance we will change the fileDestination option from here, therefore now the folder outputs will contain a folder by each table that we create.
