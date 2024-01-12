// With this file we can configure our environment variables before the aplication start.

import { config } from 'dotenv';

config({
  path: '.env.test',
});

// Then we need to go to jest file config and, there configure the setupFiles like this. (setupFiles: ['<rootDir>/setupTest.ts']),
