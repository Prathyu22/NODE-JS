const http = require('http')
//console.log(http)

const server = http.createServer((request, response) => {
    console.log(request.url)
})

//To start/run server --> server.listen()
server.listen(3000, () => {
    console.log(`Server listening at PORT: ${3000}`)
})