import { describe, expect, it, test } from '@jest/globals';
import { getUserByName } from '../src/js-foundations/03-callbacks';

describe('js-foundations/03-callbacks.ts', () => {
  test('getUserByname should return an error if user does not exist', (done) => {
    const id = 10;
    getUserByName(id, (err, user) => {
      expect(err).toBe(`User not found with id: ${id}`);
      expect(user).toBeUndefined();
      done();
    });
  });
});
