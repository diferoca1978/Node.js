import fs from 'fs';
import { yarg } from './config/plugins/argsv.plugin';

const { b: base, l: limit, s: displayTable, n: name, d: destination } = yarg;

let outputMessage = '';
const headerMessage = `
===========================
      Tabla del ${base}
===========================\n
`;

outputMessage = headerMessage + outputMessage;

const outputPath = destination;
/* The code below is creating a directory named `outputs` using the `fs` module in Node.js. The `{ recursive: true }` option ensures that the directory is created recursively, meaning that it will create any necessary parent directories if they don't already exist. */
fs.mkdirSync(outputPath, { recursive: true });

if (displayTable) {
  fs.writeFileSync(`${outputPath}/-${name}.txt`, outputMessage);
  console.log(outputMessage);
  console.log('File created!!');
} else {
  throw 'Error: File not created!!';
}
