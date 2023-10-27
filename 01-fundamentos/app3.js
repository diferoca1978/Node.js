const fs = require('fs');

//*Is reading the contents of the file `README.md` synchronously and storing it in the variable `data`. The `'utf-8'` parameter specifies the encoding of the file.
const content = fs.readFileSync('README.md', 'utf-8');

//@ to know how many words are there onto the variable called content
/* The line below is splitting the `content` variable into an array of words. It uses the `split()` method to split the string at each space character (' ') and store the resulting words in the `words` array. */
const words = content.split(' ');

//@ to know how many words like `React` are there onto the content variable

//! first method
/* const reactWordCount = words.filter((row) =>
   row.toLowerCase().includes('react')
 ).length; */

//! Refactoring the first method
/* The line below is counting the number of occurrences of the word "React" in
the `content` variable. */
const reactWordCount = content.match(/react/gi ?? []).length;

console.log('Total words:', words.length);
console.log('Words React:', reactWordCount);
