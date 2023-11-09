import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

//$ yargs options configurations to each flag

export const yarg = yargs(hideBin(process.argv))
  //* The code below are the options that we want to evaluate toeach one flag

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
  /* The `.check()` method is used to perform custom validation on the command-line arguments provided
  by the user. */
  .check((argv, options) => {
    //*
    if (argv.b < 1) throw 'Error: base must be grater than 0';
    return true;
  })
  .parseSync();
