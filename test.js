//const Name = 'mario';
//console.log(Name);

//template string
/* const greet = (name) => {
    console.log(`hello, ${name}`);
}

greet('mario');
greet('yoshi'); */

// The Global object
/* console.log(global); */

// function runs only once after the completion of mentioned number of seconds.
/*global.setTimeout( () => {
    console.log('In the timeout');
}, 3000); */
// OR
/* setTimeout( () => {
    console.log('In the timeout');
}, 3000); */

global.setTimeout( () => {
    console.log('In the timeout');
    clearInterval(int);
}, 3000); 

//function running after every number of seconds mentioned.
const int = setInterval(() => {
    console.log('In the interval');
}, 1000);


//This gives the current path to directory.
//console.log(__dirname);

//This gets the current path to the file.
//console.log(__filename);