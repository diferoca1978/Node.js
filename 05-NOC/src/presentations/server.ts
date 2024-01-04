import { CheckService } from '../domain/use-cases/checks/check-services';
import { FileSystemDataSource } from '../infrastructure/datasources.implementations/file-system.datasource';
import { LogRepositoryImpl } from '../infrastructure/repositories/log.repository.impl';
import { CronService } from './cron/cron-service';

const fileSystemLogRepository = new LogRepositoryImpl(
  new FileSystemDataSource()
);

export class Server {
  //? The code below tell us that the method start() is public and static (if we don't need to inject a dependency), so it allow us use the start() method without need to create an instance of it self.
  public static start() {
    console.log('Server Runnig...');

    // CronService.createJob('*/5 * * * * *', () => {
    //   const url = 'http://google.com';
    //   new CheckService(
    //     fileSystemLogRepository,
    //     () => console.log(`${url} is OK`),
    //     (error) => console.log(error)
    //   ).execute(url); // Here we are tell to the cron service that check every five seconds if the call to url is ok. Through the use of method execute brought from CheckService class.
    // });
  }
}
