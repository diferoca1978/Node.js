import { CheckService } from '../domain/use-cases/checks/check-services';
import { SendEmailLogs } from '../domain/use-cases/email/send-email-logs';
import { FileSystemDataSource } from '../infrastructure/datasources.implementations/file-system.datasource';
import { MongoLogDataSource } from '../infrastructure/datasources.implementations/mongo-log.data source';
import { LogRepositoryImpl } from '../infrastructure/repositories/log.repository.impl';
import { CronService } from './cron/cron-service';
import { EmailService } from './email/email.service';

const logRepository = new LogRepositoryImpl(
  //new FileSystemDataSource()
  new MongoLogDataSource()
);
const emailService = new EmailService();

export class Server {
  //? The code below tell us that the method start() is public and static (if we don't need to inject a dependency), so it allow us use the start() method without need to create an instance of it self.
  public static start() {
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

    // CronService.createJob('*/10 * * * * *', () => {
    //   const url = 'http://google.comm';
    //   new CheckService(
    //     logRepository,
    //     () => console.log(`${url} is OK`),
    //     (error) => console.log(error)
    //   ).execute(url); // Here we are tell to the cron service that check every five seconds if the call to url is ok. Through the use of method execute brought from CheckService class.
    // });
  }
}
