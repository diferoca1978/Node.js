import { getPokemonByID } from '../../src/js-foundations/06-promises';
import { describe, expect, it, test } from '@jest/globals';

describe('js-foundations/06-promises.ts', () => {
  //$ Testing success
  test('getPoquemonById should return a pokemon', async () => {
    const pokemonId = 1;
    const pokemonName = await getPokemonByID(pokemonId);
    expect(pokemonName).toBe('bulbasaur');
  });
  //$ Testing error

  test(`getPokemonById should return an error if pokemon with doesn't exist`, async () => {
    const pokemonId = 100000;
    try {
      await getPokemonByID(pokemonId);
      expect(true).toBeFalsy();
    } catch (error) {
      expect(error).toBe(`pokemon not found with id:${pokemonId}`);
    }
  });
});
