const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;

const server = http.createServer((req, res) => {

  // Get the URL and parse it
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g,'');

  // Get the query string
  const queryStringObject = parsedUrl.query;

  // Get the path
  const method = req.method.toLowerCase();

  // Get the header
  const headers = req.headers;

  // Get the payload
  const decoder = new StringDecoder('utf-8');
  let buffer = '';
  req.on('data', (data) => {
    buffer += decoder.write(data);
  });
  req.on('end', () => {
    buffer += decoder.end();

    const chosenHandler = typeof(router[trimmedPath]) !== 'undefined' ? router[trimmedPath] : handlers.notFound;

    const data = {
      'trimmedPath': trimmedPath,
      'queryStringObject': queryStringObject,
      'method': method,
      'headers': headers,
      'payload': buffer
    };

    chosenHandler(data, (statusCode, payload) => {
      statusCode = typeof(statusCode) === 'number' ? statusCode : 200;
      payload = typeof(payload) === 'object' ? payload : {};
      const payloadString = JSON.stringify(payload);

      // Send the response
      res.writeHead(statusCode);
      res.end(payloadString);      

      // Log the request path
      console.log('Request received on path: ' + trimmedPath + ' with method: ' + method);          
    });
  });

});

server.listen(3000, () => {
  console.log('The server is listening on port 3000 now');
});

// Define the handlers 
const handlers = {};

// Sample handler
handlers.sample = (data, callback) => {
  callback(406, {'name': 'sample handler'});
};

// Not found handler
handlers.notFound = (data, callback) => {
  callback(404);
};

// Define a request Router
const router = {
  'sample': handlers.sample
};