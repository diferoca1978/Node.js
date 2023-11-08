"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByName = void 0;
const users = [
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
function getUserByName(id, callback) {
    const user = users.find((row) => row.id === id);
    if (!user) {
        setTimeout(() => {
            callback(`User not found with id: ${id}`);
        }, 2500);
        return;
    }
    callback(undefined, user);
}
exports.getUserByName = getUserByName;
