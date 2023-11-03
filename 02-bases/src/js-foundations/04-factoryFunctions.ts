// const { v4: uuidv4 } = require('uuid');  It's a Node.js module installed through npm package. It's be able to generate an uuid ( universal unique ID).
// const getAge = require('get-age'); It's a Node.js module installed through npm package. It's a function that does the work of calculate an age from a born date passed as a parameter

// const buildPerson = ({ name, birthdate }) => {
//   return {
//     id: uuidv4(),
//     name,
//     birthdate,
//     age: getAge(birthdate),
//   };
// };

// const obj = { name: 'Jhon', birthdate: '1978-10-30' };

// const Jhon = buildPerson(obj);

// console.log(Jhon);

//? The code above have a problem and it is that when we use a third party module our code can't be scalable because if we'll need to change the third party module, we need to do this onto our entire code or where we've used this module.

//$ Refactory the third party modules using them as a plugins.

import { getAge, getUUID } from '../plugins'; //! Now we're import the modules created for ourselves through a file called cylinder In our case (index.js)

interface personOptions {
  name: string;
  birthdate: string;
}

const buildPerson = ({ name, birthdate }: personOptions) => {
  return {
    id: getUUID(),
    name,
    birthdate,
    age: getAge(birthdate),
  };
};

const obj = { name: 'Jhon', birthdate: '1978-10-30' };

const Jhon = buildPerson(obj);

console.log(Jhon);
