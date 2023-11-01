"use strict";
var _a;
const heroes = [
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
const findHeroById = (id) => {
    return heroes.find((row) => row.id == id);
};
const hero = findHeroById(4);
console.log((_a = hero === null || hero === void 0 ? void 0 : hero.name) !== null && _a !== void 0 ? _a : 'Hero not found!'); //* Here we're use a optional operator (.?) and nullish coalescing operator (??) which means that if the reference on the left is null/undefined automatically short-circuits returning undefined and will show the left expression.
