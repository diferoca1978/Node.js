import { findHeroById } from './services/hero-service';

const hero = findHeroById(4);

console.log(hero?.name ?? 'Hero not found!!'); //* Here we're use a optional operator (.?) and nullish coalescing operator (??) which means that if the reference on the left is null/undefined automatically short-circuits returning undefined and will show the left expression.
