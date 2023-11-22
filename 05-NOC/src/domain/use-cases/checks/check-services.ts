//? This use case allow us check or make a review any url that we are using

/* The `CheckServiceUsecase` interface defines a contract for a use case called `execute`. This use
case takes a `url` parameter of type string and returns a promise that resolves to a boolean value. */

interface CheckServiceUsecase {
  execute(url: string): Promise<boolean>;
}

//$ Dependencies injection

// The Dependencies injection means that to use dependencies onto our use cases. For instance with the code below we want to indicate what we want to
// happen if our use case had been succsess or had failed.

type SucccessCallback = () => void;
type ErrorCalback = (error: string) => void;

/* The CheckService class is responsible for executing a request to a given URL and returning a boolean
indicating whether the request was successful or not. */
export class CheckService implements CheckServiceUsecase {
  // Commonly the dependencies injection to do in TypeScriptour through a constructor function.
  //Here we can use the dependencies as a parameters
  constructor(
    private readonly successCallback: SucccessCallback,
    private readonly errorCallback: ErrorCalback
  ) {}

  public async execute(url: string): Promise<boolean> {
    try {
      const req = await fetch(url);
      if (!req.ok) {
        throw new Error(`Error in the service ${url}`);
      }
      this.successCallback();
      return true;
    } catch (error) {
      this.errorCallback(`${error}`);
      return false;
    }
  }
}
