const fs = require('fs') // fs --> FileSystem.
//console.log(fs)
//fs module ---> It allow to access your disk. Used to write, read, update delete on hard disk.

fs.writeFile('./text.txt',"New Stuff inside the file", (error,data) => {
    if(error) 
        console.log(error)
})


fs.writeFile('./text.txt',`Append me ${fs.readFileSync('./text.txt','utf8')}`, (error) => {
    if(error) 
        console.log(error)
})