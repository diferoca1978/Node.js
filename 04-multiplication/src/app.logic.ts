import fs from 'fs';

let outputMessage = '';
const base = 5;
const headerMessage = `
===========================
      Tabla del ${base}
===========================\n
`;

for (let i = 0; i <= 10; i++) {
  outputMessage += `${base} x ${i} = ${base * i}\n`;
}

outputMessage = headerMessage + outputMessage;

console.log(outputMessage);

const outputPath = 'outputs';
/* The code below is creating a directory named `outputs` using the `fs` module in Node.js. The `{ recursive: true }` option ensures that the directory is created recursively, meaning that it will create any necessary parent directories if they don't already exist. */
fs.mkdirSync(outputPath, { recursive: true });

fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);

console.log('File created!!');
