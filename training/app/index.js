/*
 *  Primary file for the API 
 */

// ? Dependencies
const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;

// ? The Server starting
const server = http.createServer((req, res) => {
  // ? Get Path
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, '');

  // ? Get Method
  const method = req.method.toLowerCase();

  // ? Get Querystring
  const queryStringObject = parsedUrl.query;

  // ? Get Header
  const headers = req.headers;

  // ? Get the Payload, If any
  const decoder = new StringDecoder('utf-8');
  let buffer = '';
  req.on('data', (data) => {
    buffer += decoder.write(data);
  });

  req.on('end', () => {
    buffer += decoder.end();

    // ! Choose the Handler
    const chosenHandler = typeof(router[trimmedPath]) !== 'undefinded' ? router[trimmedPath] : handlers.notFound;
    
    // ! Construct
    const data = {
      'trimmedPath' : trimmedPath,
      'queryStringObject' : queryStringObject,
      'method' : method,
      'headers' : headers,
      'payload' : buffer
    }

    chosenHandler(data, (statusCode, payload) => {
      statusCode = typeof(statusCode) === 'number' ? statusCode : 200;
      payload = typeof(payload) === 'object' ? payload : {};

      const payloadString = JSON.stringify(payload);

      // ! End Event
      res.writeHead(statusCode);
      res.end(payload);

      // ? Console
      console.log('Status code is', statusCode);
      console.log('Payload is', payload);     
    }); 
  });
});

server.listen(3000, () => {
  console.log(`The server is listening on port 3000 now`);
});

let handlers = {};

handlers.sample = (data, callback) => {
  // ? Callback a http status code, and a payload object
  callback(400, {
    'name' : 'sample handler'
  });
};

// Not Found handler
handlers.notFound = (data, callback) => {
  callback(404);
};

const router = {
  'sample' : handlers.sample
};