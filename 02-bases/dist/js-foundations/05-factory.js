"use strict";
//$ Factory function
//?Definition: A factory function is a function that create another function, and it's useful to pass our dependencies as an arguments. Now notice that we don't have any dependency here.
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildMakePerson = void 0;
const BuildMakePerson = ({ getUUID, getAge, }) => {
    return ({ name, birthdate }) => {
        return {
            id: getUUID(),
            name,
            birthdate,
            age: getAge(birthdate),
        };
    };
};
exports.BuildMakePerson = BuildMakePerson;
