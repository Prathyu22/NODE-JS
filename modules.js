//require is used to import the file.
const xyz = require('./people');

console.log(xyz); // gives empty object as output. o/p = {}.
                  // It gives the output as hello when we write module.exports statement in imported file(people.js).
//console.log(people); //ReferenceError: people is not defined.