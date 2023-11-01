const { getAge, getUUID } = require('./plugins');

/* const { emailTemplate } = require('./js-foundations/01-template');
require('./js-foundations/02-destructuring'); */

/*const { getUserByName } = require('./js-foundations/03-callbacks');*/
//*require('./js-foundations/04-factoryFunctions');

/*const name = 'Janne Doe';

getUserByName(name, (error, user) => {
  if (error) throw new Error(error);

  console.log(user);
});*/

//$ Using the factory function.

/*const { BuildMakePerson } = require('./js-foundations/05-factory.js');

const makePerson = BuildMakePerson({ getUUID, getAge });

const obj = { name: 'Jhon', birthdate: '1978-10-30' };

const Jhon = makePerson(obj);

console.log({ Jhon });*/

//$ Using promises with Fetch

// const getPokemonById = require('./js-foundations/06-promises');

// getPokemonById(5)
//   .then((pokemon) => console.log({ pokemon }))
//   .catch((err) => console.log(err)) //! With this line we're handle the exeption. If we don't use this line of code the app could crash
//   .finally(() => console.log('Finish'));

//$ Using logger

const { buildLogger } = require('./plugins');

const logger = buildLogger('app.js');

logger.log('Hello Word');
logger.error(' Something was wrong');
