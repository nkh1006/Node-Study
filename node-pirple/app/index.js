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

    // Send the reponse
    res.end('Hello World');

    // Log the request path
    console.log('Request received on path: ' + trimmedPath + ' with method: ' + method);
    console.log('Querystring: ' + JSON.stringify(queryStringObject) + ' with headers: ' + JSON.stringify(headers));
    console.log('Request received with this payload: ' + buffer);
  });
});

server.listen(3000, () => {
  console.log("The server is listening on port 300 now");
});