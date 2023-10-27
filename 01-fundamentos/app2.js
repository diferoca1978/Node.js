const fs = require('fs');

//*Is reading the contents of the file `README.md` synchronously and storing it in the variable `data`. The `'utf-8'` parameter specifies the encoding of the file.
const data = fs.readFileSync('README.md', 'utf-8');

/* Is replacing all occurrences of the word "React" (case-insensitive) in the `data` variable with the word "Angular". The `replace()` method is a string method in JavaScript that replaces a specified value with another value in a string. In this case, it is replacing "React" with "Angular". The `g` flag is used to perform a global search (replace all occurrences) and the `i` flag is used to perform a case-insensitive search. The resulting modified string is stored in the
`newData` variable. */
const newData = data.replace(/React/gi, 'Angular');

/* Is writing the modified data stored in the `newData` variable to a new file named `README-Angular.md`. The `writeFileSync()` method is a synchronous method in the `fs` module of Node.js that writes data to a file. In this case, it is creating a new file named `README-Angular.md` and writing the modified data to it. */
fs.writeFileSync('README-Angular.md', newData);
