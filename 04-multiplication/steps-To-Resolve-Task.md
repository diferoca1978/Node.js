# Steps to resolve the task

1. Add the new options onto our configuration file of yargs argsv.plugin

```
.options('n', {
    alias: 'name',
    type: 'string',
    default: 'Multiplication-table',
    describe: 'File name',
  })
  .options('d', {
    alias: 'destination',
    type: 'string',
    default: 'outputs.2',
    describe: 'File destination',
  })
```

2. Inside our entry point (app.ts) we must use the new options just as show below

```
async function main() {
  const {
    b: base,
    l: limit,
    s: displayTable,
    n: fileName,
    d: fileDestination,
  } = yarg;

  serverApp.run({ base, limit, displayTable, fileName, fileDestination });
}
```

3. Inside our (server.app.ts) file, onto static run() method we must call the new options by destructuring like code below.

```
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
```

4. Crear scripts para dev, build y start

```
  "dev": "nodemon",
  "build": "rimraf ./dist && tsc",
  "start": "npm run build && node dist/app.js"
```
