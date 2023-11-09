import { yarg } from './config/plugins/argsv.plugin';
import { serverApp } from './presentation/server.app';

// console.log(argsv.b);

//$ Auto-invoked function

//? explanation:
// The code below is a process which we can use a auto-invoked function to make the process asynchronous, that way we can call yargs through async await.

(async () => {
  await main();
})();

/* The comment is explaining that the `main` function is typically considered the entry point of the
application by convention. This means that it is the function that is called first when the
application starts running. */

//*The main function is often our entry point in our aplication by convention.

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
