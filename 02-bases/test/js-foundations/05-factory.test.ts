import { BuildMakePerson } from '../../src/js-foundations/05-factory';
import { describe, expect, it, test } from '@jest/globals';

describe('js -foundation/05-factory.ts', () => {
  const getUUID = () => '1234';
  const getAge = () => 36;

  test('BuildMakePerson should return a function', () => {
    const makePerson = BuildMakePerson({ getUUID, getAge });
    expect(typeof makePerson).toBe('function');
  });
  test('make person should return a person', () => {
    const makePerson = BuildMakePerson({ getUUID, getAge });
    const jhonDoe = makePerson({ name: 'Jhon Doe', birthdate: '1978-10-30' });

    expect(jhonDoe).toEqual({
      id: '1234',
      name: 'Jhon Doe',
      birthdate: '1978-10-30',
      age: 36,
    });
  });
});
