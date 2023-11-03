interface User {
  id: number;
  name: string;
  age: number;
}

const users: User[] = [
  {
    id: 1,
    name: 'Jhon Doe',
    age: 40,
  },
  {
    id: 2,
    name: 'Janne Doe',
    age: 37,
  },
];

export function getUserByName(
  id: number,
  callback: (err?: string, user?: User) => void
) {
  const user = users.find((row) => row.id === id);
  if (!user) {
    setTimeout(() => {
      callback(`User not found with id: ${id}`);
    }, 2500);
    return;
  }
  callback(undefined, user);
}
