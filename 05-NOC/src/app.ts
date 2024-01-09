import { Server } from './presentations/server';
import { LogModel, MongoDataBase } from './data/mongo';
import { envs } from './config/envs.plugin';

(async () => {
  main();
})();

async function main() {
  await MongoDataBase.connect({
    mongoUrl: envs.MONGO_URL,
    dbName: envs.MONGO_DB_NAME,
  });

  //? Create a collection in mongo is equal to create a table in a relational DB.
  //?Create a document in mongo is equal to create a row in a relational DB.

  // const newLog = await LogModel.create({
  //   message: 'Test message from Mongo 🙊',
  //   origin: 'app.ts',
  //   level: 'low',
  // });

  //* With the code below we are going to record the information in our DB

  // await newLog.save();

  // console.log(newLog);

  //* With the code below we can consult our records

  // const logs = await LogModel.find();
  // console.log(logs);

  Server.start();
}
