//require is used to import the file.
const xyz = require('./people');

console.log(xyz); 
/* 
o/p = {
    people: [ 'yoshi', 'ryu', 'chun-li', 'mario' ],
    ages: [ 20, 25, 30, 35 ]
 }
*/

console.log(xyz.people, xyz.ages); 
/*
o/p = [ 'yoshi', 'ryu', 'chun-li', 'mario' ] [ 20, 25, 30, 35 ]
*/