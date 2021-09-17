// ? node version check
// ! node -v

// ? npm module version check
// ! npm -v

// ? lunch node
// ! node part1.js (terminal)

// console.log(1 * 0);
// console.log('Hello World');

// ? require
const http = require('http'); 

// ? create web server
http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello World');
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');