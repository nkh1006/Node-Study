const url = require('url');

const adress = 'http://localhost:8080/default.html?year=2017&month=february';

const parsedUrl = url.parse(adress, true);

console.log(parsedUrl.host);
console.log(parsedUrl.pathname);
console.log(parsedUrl.query);
console.log(parsedUrl.query.year);