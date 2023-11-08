import { getUUID } from '../../src/plugins/get-id-plugin';
import { describe, expect, it, test } from '@jest/globals';

describe('plugins/get-age-plugin.ts', () => {
  test('getUUID() should return a UUID', () => {
    const uuid = getUUID();
    expect(typeof uuid).toBe('string');
    expect(uuid.length).toBe(36); //! UUID module always must include 36 characters
  });
});
