import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

//$ yargs options configurations to each flag

export const yarg = yargs(hideBin(process.argv))
  .options('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'multiplication table base',
  })
  .options('l', {
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'multiplication table limit',
  })
  .options('s', {
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'Show multiplication table ',
  })
  .parseSync();
