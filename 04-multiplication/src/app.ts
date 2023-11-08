import { yarg as argsv } from './config/plugins/argsv.plugin';

// console.log(argsv.b);+

//$ Auto-invoked function

//? explanation:
// the code below is a process witch we can use a auto-invoked function to make the process asynchronous, this way we can call yargs through async await.

(async () => {
  await main();
})();

async function main() {
  console.log(argsv);
}
