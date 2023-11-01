/* The `interface Hero` is defining the structure or shape of an object that represents a hero. It specifies that a hero object should
have three properties: `id` of type `number`, `name` of type `string`, and `owner` of type `string`. */
interface Hero {
  id: number;
  name: string;
  owner: string;
}

/* The line `export const heroes: Hero[] =` is declaring a constant variable named `heroes` of type `Hero[]`, which is an array of objects that conform to the `Hero` interface. The `export` keyword makes the `heroes` variable accessible outside of the current module. */
export const heroes: Hero[] = [
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
