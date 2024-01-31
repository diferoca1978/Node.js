// This is a procedure similar to our BD, but it doesn't our server, so it will simulate our server and run some procedures to populate our DB to use it to make test.

import { envs } from '../../config';
import { CategoryModel, MongoDB, UserModel, productModel } from '../mongo';
import { seedData } from './data';

(async () => {
  await MongoDB.connect({
    mongoUrl: envs.MONGO_URL,
    dbName: envs.MONGO_DB_NAME,
  });

  await main();

  await MongoDB.disconnect();
})();

async function main() {
  // 1. Delete all.

  await Promise.all([
    UserModel.deleteMany(),
    CategoryModel.deleteMany(),
    productModel.deleteMany(),
  ]);

  // 2. Create users.

  const users = await UserModel.insertMany(seedData.users);

  //3. Create categories.

  const categories = await CategoryModel.insertMany(
    seedData.categories.map((category) => {
      return {
        ...category,
        user: users[0]._id,
      };
    })
  );

  //4. Create products.

  const products = await productModel.insertMany(
    seedData.products.map((product) => {
      return {
        ...product,
        user: users[0]._id,
        category: categories[0]._id,
      };
    })
  );

  console.log('SEEDED');
}
