"use strict";
//$Deprecated way.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonByID = void 0;
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
const http_client_plugin_1 = require("../plugins/http-client-plugin");
const getPokemonByID = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const pokemon = yield http_client_plugin_1.httpClientPlugin.get(url);
        return pokemon.name;
    }
    catch (error) {
        throw `pokemon not found with id:${id}`;
    }
});
exports.getPokemonByID = getPokemonByID;
