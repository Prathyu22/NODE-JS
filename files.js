const fs = require('fs');

//reading files.
fs.readFile('./docs/blog1.txt', (err,data) => {
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});

//writing files.
fs.writeFile('./docs/blog1.txt', 'hello world', () => {
    console.log('File was written');
});

//directories.

// If assests folder exists the the code here doesn't executes.
if(!fs.existsSync('./assests')) {
    fs.mkdir('./assests', (err) => {
        if(err) {
            console.log(err);
        }
        console.log('Folder created');
    });
}
else{
    fs.rmdir('./assests', (err) => {
        if(err) {
            console.log(err);
        }
        console.log('Folder deleted');
    });
}

//deleting files.
//If the file exists then it is deleted.
if(fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err) {
            console.log(err);
        }
        console.log('File deleted.')
    })
}
