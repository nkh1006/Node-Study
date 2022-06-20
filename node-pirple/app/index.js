/*
  * Primary file for the API
*/

// Dependencies
const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;

const server = http.createServer((req, res) => {
  // Get the URL and parse it
  const parsedUrl = url.parse(req.url, true);
  // console.log('parsedUrl: ', parsedUrl);

  // Get the path
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g,'');
  // console.log('trimmedPath: ', trimmedPath);

  // Get the query string as an object
  const queryStringObject = parsedUrl.query;

  // Get the HTTP Method
  const method = req.method.toLowerCase();

  // Get the headers as an object
  const headers = req.headers;

  // Get the payload, if any
  const decoder = new StringDecoder('utf-8');
  let buffer = '';
  req.on('data', (data) => {
    buffer += decoder.write(data);
  });

  req.on('end', () => {
    buffer += decoder.end();

    console.log('trimmedPath', trimmedPath);
    const chosenHandler = typeof(router[trimmedPath] !== 'undefined') ? router[trimmedPath] : handlers.notFound;
    console.log('router[trimmedPath]', router['sample']);

    const data = {
      'trimmedPath': trimmedPath,
      'queryStringObject': queryStringObject,
      'method': method,
      'headers': headers,
      'payload': buffer
    };

    console.log('chosenHandler', chosenHandler);

    chosenHandler(data, (statusCode, payload) => {
      statusCode = typeof(statusCode) === 'number' ?  statusCode : 200;
      payload = typeof(payload) === 'object' ? payload : {};
      const payloadString = JSON.stringify(payload);

      res.writeHead(statusCode);

      // Send the reponse
      res.end('Hello World');
      
      console.log('Returning this reponse: ', statusCode.payloadString);
    });

    // Log the request path
    // console.log('Request received on path: ' + trimmedPath + ' with method: ' + method);
    // console.log('Querystring: ' + JSON.stringify(queryStringObject) + ' with headers: ' + JSON.stringify(headers));
    // console.log('Request received with this payload: ' + buffer);
  });
});

server.listen(3000, () => {
  console.log("The server is listening on port 3000 now");
});

let handlers = {};

// Sample handler
handlers.sample = (data, callback) => {
  callback(406, {'name' : 'sample handler'});
};

// Not found handler
handlers.notFound = (data, callback) => {
  callback(404);
};

// Define a request router
const router = {
  'sample': handlers.sample
}