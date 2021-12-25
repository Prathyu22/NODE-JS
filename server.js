const http = require('http')
//console.log(http)
const fs = require('fs')
const path = require('path')

const server = http.createServer((request, response) => {
    //console.log(request.url)
    //console.log(request.headers)
    //console.log(request.method)
    //const path = request.url
    //response.write(`You made a request to ${path}`)
    //response.write(' Hello World!!')
    //response.write(`<h1> I'm a heading. Sending this heading from server.</h1>`)
    //response.write(`./index.html`)
    const markup = fs.readFileSync(path.resolve('./index.html'))
    response.write(markup)
    response.end()
})

//To start/run server --> server.listen()
server.listen(3000, () => {
    console.log(`Server listening at PORT: ${3000}`)
}) 