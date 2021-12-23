const fs = require('fs') // fs --> FileSystem.
//console.log(fs)
//fs module ---> It allow to access your disk. Used to write, read, update delete on hard disk.

fs.readFile('./text.txt', (error,data) => {
    if(error) 
        console.log(error)
    else {
        console.log(typeof data) //object
        console.log(data) //buffer
        console.log(data.toString()) //text given in text.txt
    }
})

/*fs.readFile('./text.txt','utf8', (error,data) => {
    if(error) 
        console.log(error)
    else {
        console.log(typeof data) //string
        console.log(data) //text given in text.txt
        console.log(data.toString()) //text given in text.txt 
    }
})*/

console.log(fs.readFileSync('./text.txt','utf8'))
console.log(`I'm a random log`)
 