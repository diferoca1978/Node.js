"use strict";
//console.log(process.env);
Object.defineProperty(exports, "__esModule", { value: true });
exports.characters = void 0;
//! Destructuring
const { SHELL, HOMEBREW_PREFIX, npm_lifecycle_script } = process.env;
//console.table({ SHELL, HOMEBREW_PREFIX, npm_lifecycle_script });
exports.characters = ['Batman', 'Superman', 'Acuaman', 'Flash'];
const [, mansuper] = exports.characters;
//console.log(mansuper);
