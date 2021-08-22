const url = require('url');

const adress = 'http://localhost:3000/user/id/1?name="test"';

const parsedUrl = url.parse(adress, true);


console.log(parsedUrl.hostname);
console.log(parsedUrl.pathname);
console.log(parsedUrl.query);