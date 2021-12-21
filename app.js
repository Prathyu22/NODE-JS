const path = require('path')
//console.log(path)

path.resolve('./utils.js') //relative path
console.log(path.resolve('./utils.js')) // Absolute path --- starts from the core of the machine.
//Resolve() --- converts the relative to the absolute path.

console.log(path.relative('/',"./utils.js"))// returns the path of temp/utils.js relative to the temp folder.
//path.relative() --- converts into relative.
//Right side path is relative to the left side path.
//2 parameters ---> 1.Relative to which you want the path to do.
//                  2. actual/absolute path or relative path of the file or folder.
 
console.log(path.extname('./utils.js')) // gives you the extension nme.

console.log(path.dirname('./temp/utils.js')) // directory name.

console.log(__dirname) // path of the current directory.
console.log(path.join(__dirname, 'utils.js')) // same as resolve().
