//? This use case allow us check or make a review any url that we are using

import { LogEntity, LogSeverityLevel } from '../../entities/log.entity';
import { LogRepository } from '../../repository/log.repository';

/* The `CheckServiceUsecase` interface defines a contract for a use case called `execute`. This use
case takes a `url` parameter of type string and returns a promise that resolves to a boolean value. */

interface CheckServiceUsecase {
  execute(url: string): Promise<boolean>;
}

//$ Dependencies injection

/* The Dependencies injection means that to use dependencies onto our use cases. For instance with the code below we want to indicate what we want to
happen if our use case had been succsess or had failed.*/

type SucccessCallback = (() => void) | undefined; //* Here we are doing that the successCallback be optional.
type ErrorCallback = ((error: string) => void) | undefined; //* Here we are doing that the ErrorCallback be optional.

/* The CheckService class is responsible for executing a request to a given URL and returning a boolean
indicating whether the request was successful or not. */
export class CheckService implements CheckServiceUsecase {
  // Commonly the dependencies injection to do in TypeScript through a constructor function.
  //Here we can use the dependencies as a parameters
  constructor(
    private readonly logRepository: LogRepository,
    private readonly successCallback: SucccessCallback,
    private readonly errorCallback: ErrorCallback
  ) {}

  public async execute(url: string): Promise<boolean> {
    try {
      const req = await fetch(url);
      if (!req.ok) {
        throw new Error(`Error in the service ${url}`);
      }
      const log = new LogEntity({
        message: `Service ${url} working`,
        level: LogSeverityLevel.low,
        origin: 'check-service.tes',
      });
      this.logRepository.saveLog(log);
      this.successCallback && this.successCallback(); //* Here we are using the short method to ask if successCallback exists, call it. Is the same thing that to use an if.
      return true;
    } catch (error) {
      const errorMessage = `${url} is not ok ${error}`;
      const log = new LogEntity({
        message: errorMessage,
        level: LogSeverityLevel.high,
        origin: 'check-service.ts',
      });
      this.logRepository.saveLog(log);
      this.errorCallback && this.errorCallback(errorMessage);
      return false;
    }
  }
}
