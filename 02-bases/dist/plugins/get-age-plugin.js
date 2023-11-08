"use strict";
//const getAgePlugin = require('get-age');
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAge = void 0;
const getAge = (birthdate) => {
    return new Date().getFullYear() - new Date(birthdate).getFullYear();
    //return getAgePlugin(birthdate);
};
exports.getAge = getAge;
