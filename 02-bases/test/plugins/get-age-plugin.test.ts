import { getAge } from '../../src/plugins/get-age-plugin';
import { describe, expect, it, test } from '@jest/globals';

describe('plugins/get-age-plugin.ts', () => {
  test('getAge() should return the age of a person', () => {
    const birthdate = '1978-10-30';
    const age = getAge(birthdate);

    const calculateAge =
      new Date().getFullYear() - new Date(birthdate).getFullYear();

    expect(age).toBe(calculateAge);
  });
});

//todo: without finished, need to implement spyOn.
