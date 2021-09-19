// ? require (include) module
// == require('./circle')
const circle = require('./circle.js');

console.log(`지름이 4인 원의 면적: ${circle.area(4)}`);
console.log(`지름이 4인 원의 둘레: ${circle.circumference(4)}`);

// ? call app.js
// ! node app
