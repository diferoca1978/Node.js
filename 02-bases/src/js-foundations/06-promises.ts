//$Deprecated way.

/*const getPokemonByID = (id, callback) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  fetch(url).then((response) => {
    response.json().then((pokemon) => {
      callback(pokemon.name);
    });
  });
};*/

//$ More appropiate way (chain of .then)

// const getPokemonByID = (id) => {
//   const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

//   return (
//     fetch(url)
//       .then((res) => res.json())
//       .then(() => {
//         throw new Error('Pokemon not found');
//       })
//       .then((pokemon) => pokemon.name)
//   );
// };

//$ Async and await way

// const getPokemonByID = async (id) => {
// const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

//   const res = await fetch(url);
//   const pokemon = await res.json();

//   throw new Error(`pokemon doesn't exists`);

//   return pokemon.name;
// };

//$ The better way: Working with adapter pattern

import { httpClientPlugin as http } from '../plugins/http-client-plugin';

export const getPokemonByID = async (id: string | number): Promise<string> => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemon = await http.get(url);
    return pokemon.name;
  } catch (error) {
    throw `pokemon not found with id:${id}`;
  }
};
