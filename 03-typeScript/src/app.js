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

const hero = findHeroById(2);

console.log(hero?.name ?? 'Hero not found'); //* Here we're use a optional operator (.?) and nullish coalescing operator (??) which means that if the reference on the left is null/undefined automatically short-circuits returning undefined and will show the left expression.
