interface User {
  name: string;
  age: number;
}

const users: User[] = [
  {
    name: 'Jhon Doe',
    age: 40,
  },
  {
    name: 'Janne Doe',
    age: 37,
  },
];

export const getUserByName = (
  name: string,
  callback: (err?: string, user?: User) => void
) => {
  const user = users.find((row) => row.name == name);
  user
    ? callback(undefined, user)
    : callback(`User not found with name ${name}`);
};
