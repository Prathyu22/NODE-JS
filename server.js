//Importing
const http = require('http')
const fs = require('fs')
const path = require('path')

//Routing
const server = http.createServer((request, response) => {
    const {url} = request
    if(url == '/login')
    {
        response.write('<h1>LOGIN</h1>')
        response.end()
    }
    if(url == '/signup')
    {
        response.write('<h1>SIGN UP</h1>')
        response.end()
    }
})

//To start/run server --> server.listen()
server.listen(3000, () => {
    console.log(`Server listening at PORT: ${3000}`)
}) 