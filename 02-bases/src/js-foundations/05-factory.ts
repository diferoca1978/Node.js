//$ Factory function
//?Definition: A factory function is a function that create another function, and it's useful to pass our dependencies as an arguments. Now notice that we don't have any dependency here.

interface BuildMakePersonOptions {
  getUUID: () => string;
  getAge: (birthdate: string) => number;
}

interface personOptions {
  name: string;
  birthdate: string;
}

export const BuildMakePerson = ({
  getUUID,
  getAge,
}: BuildMakePersonOptions) => {
  return ({ name, birthdate }: personOptions) => {
    return {
      id: getUUID(),
      name,
      birthdate,
      age: getAge(birthdate),
    };
  };
};
