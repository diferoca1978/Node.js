"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.heroes = void 0;
/* The line `export const heroes: Hero[] =` is declaring a constant variable named `heroes` of type `Hero[]`, which is an array of objects that conform to the `Hero` interface. The `export` keyword makes the `heroes` variable accessible outside of the current module. */
exports.heroes = [
    {
        id: 1,
        name: 'Ironman',
        owner: 'Marvel',
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel',
    },
    {
        id: 3,
        name: 'Batman',
        owner: 'DC',
    },
];
