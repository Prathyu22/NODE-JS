const http = require('http');

const server = http.createServer( (req, res) => {
    //console.log(req);
    console.log(req.url, req.method);

    //set header content type.
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello, Ninjas');
    res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on PORT 3000');
});