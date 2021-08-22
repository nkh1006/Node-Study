// console.log(5 + 5);

/* 
  ! BROWSER

  BROWSER JS는 기본적으로 WINDOW Object에 속해져 있다.
  document.querySelector('.nav-open');
  window.document.querySelector('.nav-open');
  const name = 'Dev Ed';

  window.name;

*/

/* 
  ! NODE
*/

const sayName = require('./sayName');

sayName();


console.log(__filename);
console.log(__dirname);