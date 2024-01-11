import { Server } from './presentations/server';
import { LogModel, MongoDataBase } from './data/mongo';
import { envs } from './config/envs.plugin';
import { PrismaClient } from '@prisma/client';

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

  //? The lines below we are create the rows in our postgresSQL data base whit prisma.

  // const prisma = new PrismaClient();
  // const newLog = await prisma.logModel.create({
  //   data: {
  //     level: 'HIGH',
  //     message: 'Test message',
  //     origin: 'App.ts',
  //   },
  // });

  // const logs = await prisma.logModel.findMany({
  //   where: {
  //     level: 'HIGH',
  //   },
  // });

  // console.log(logs);

  Server.start();
}
