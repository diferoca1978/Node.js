import { CheckServiceMulti } from '../domain/use-cases/checks/check-services-multi';
import { FileSystemDataSource } from '../infrastructure/datasources.implementations/file-system.datasource';
import { MongoLogDataSource } from '../infrastructure/datasources.implementations/mongo-log.datasource';
import { PostgresLogDataSource } from '../infrastructure/datasources.implementations/postgreSQL-log.dataSource';
import { LogRepositoryImpl } from '../infrastructure/repositories/log.repository.impl';
import { CronService } from './cron/cron-service';
import { EmailService } from './email/email.service';

const fslogRepository = new LogRepositoryImpl(new FileSystemDataSource());
const mongologRepository = new LogRepositoryImpl(new MongoLogDataSource());
const postgreslogRepository = new LogRepositoryImpl(
  new PostgresLogDataSource()
);
const emailService = new EmailService();

export class Server {
  //? The code below tell us that the method start() is public and static (if we don't need to inject a dependency), so it allow us use the start() method without need to create an instance of it self.
  public static async start() {
    console.log('Server Runnig...');

    //$ Send an email

    //? Here we are sending an email with attachments through the use case, for instance in this case we're sending the logs files. Besides we're recording if the email was sent correctly.

    // new SendEmailLogs(emailService, fileSystemLogRepository).execute([
    //   'diferoca30101978@gmail.com',
    //   'diferoca1978@hotmail.com',
    // ]);

    // emailService.sendEmailWithFileSysytemLogs([
    //   'diferoca30101978@gmail.com',
    //   'diferoca1978@hotmail.com',
    // ]);

    // const logs = await logRepository.getLogs(LogSeverityLevel.low);
    // console.log(logs);

    CronService.createJob('*/10 * * * * *', () => {
      const url = 'http://google.com';
      new CheckServiceMulti(
        [fslogRepository, mongologRepository, postgreslogRepository],
        () => console.log(`${url} is OK`),
        (error) => console.log(error)
      ).execute(url); // Here we are tell to the cron service that check every ten seconds if the call to url is ok. Through the use of method execute brought from CheckService class. Also we use a multi check service use case to record the in three different kind of data bases (file system, mongo DB, postgreSQL DB)
    });
  }
}
