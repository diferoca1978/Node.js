"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hero_service_1 = require("./services/hero-service");
const hero = (0, hero_service_1.findHeroById)(4);
console.log(hero?.name ?? 'Hero not found!!'); //* Here we're use a optional operator (.?) and nullish coalescing operator (??) which means that if the reference on the left is null/undefined automatically short-circuits returning undefined and will show the left expression.
