// Here we want to test if the (Environment variables envs) are declare correctly.

import { envs } from './envs.plugin';

describe('envs.plugin.ts tests', () => {
  test('Should return env options', () => {
    expect(envs).toEqual({
      PORT: 3000,
      MAILER_SERVICE: 'gmail',
      MAILER_EMAIL: 'rodriguezcastrodiegof@gmail.com',
      MAILER_SECRET_KEY: 'vbxf opwu vvcf qaly',
      PROD: false,
      MONGO_URL: 'mongodb://Diego:123456789@localhost:27017',
      MONGO_DB_NAME: 'NOC-TEST',
      MONGO_USER: 'Diego',
      MONGO_PASS: '123456789',
    });
  });

  test('Should return error if not found env', async () => {
    jest.resetModules(); // In this line we are guarantying that all modules were reset
    process.env.PORT = 'ABC';

    try {
      await import('./envs.plugin'); //with this line we are sure that test is falling in our envs file.
      expect(true).toBe(false);
    } catch (error) {
      expect(`${error}`).toContain('"PORT" should be a valid integer');
    }
  });
});
