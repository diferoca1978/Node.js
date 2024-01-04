import { Server } from './presentations/server';
import { envs } from './config/envs.plugin';

(async () => {
  main();
})();

function main() {
  Server.start();
}
