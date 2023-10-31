console.log('01-Inicio de programa');

setTimeout(() => {
  console.log('05-Primer Timeout');
}, 3000);

setTimeout(() => {
  console.log('02-Segundo Timeout');
}, 1);

setTimeout(() => {
  console.log('03-Tercer Timeout');
}, 0);

console.log('04-Fin de programa');
