//console.log(process.env);

//! Destructuring

const { SHELL, HOMEBREW_PREFIX, npm_lifecycle_script } = process.env;

//console.table({ SHELL, HOMEBREW_PREFIX, npm_lifecycle_script });

export const characters = ['Batman', 'Superman', 'Acuaman', 'Flash'];

const [, mansuper] = characters;

//console.log(mansuper);
