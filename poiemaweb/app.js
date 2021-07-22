const http = require('http');

http.createServer((req, res) => {
    res.statusCode = 200; // OK
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
}).listen(3000);


console.log('Server running at http://127.0.0.1:3000/');