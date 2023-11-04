//$ callback passing the error.

import { describe, expect, it, test } from '@jest/globals';
import { getUserByName } from '../../src/js-foundations/03-callbacks';

// describe('js-foundations/03-callbacks.ts', () => {
//   test('getUserByname should return an error if user does not exist', (done) => {
//     const id = 10;
//     getUserByName(id, (err, user) => {
//       expect(err).toBe(`User not found with id: ${id}`);
//       expect(user).toBeUndefined();
//       done();
//     });
//   });
// });

//$ Callback success

describe('js-foundation/03-callbacks.ts', () => {
  test('getUserById should return an user that is included into the data', (done) => {
    const id = 2;
    getUserByName(id, (err, user) => {
      expect(err).toBeUndefined;
      expect(user).toHaveProperty('age');
      expect(user).toEqual({
        id: 2,
        name: 'Janne Doe',
        age: 37,
      });
      done();
    });
  });
});
