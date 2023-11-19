//? This use case allow us check or make a review any url that we are using

/* The `CheckServiceUsecase` interface defines a contract for a use case called `execute`. This use
case takes a `url` parameter of type string and returns a promise that resolves to a boolean value. */

interface CheckServiceUsecase {
  execute(url: string): Promise<boolean>;
}

/* The CheckService class is responsible for executing a request to a given URL and returning a boolean
indicating whether the request was successful or not. */
export class CheckService implements CheckServiceUsecase {
  public async execute(url: string): Promise<boolean> {
    try {
      const req = await fetch(url);
      if (!req.ok) {
        throw new Error(`Error in the service ${url}`);
      }
      console.log(`${url} Response 👌`);
      return true;
    } catch (error) {
      console.log(`${error}`);
      return false;
    }
  }
}
