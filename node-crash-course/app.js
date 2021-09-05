// node.js는 javascript runtime 이다. 특별한것이 아니고
// node.js browser 환경에서 동작하는것이 아니고, system 환경에서 동작 할 수 있게 도와준다.
// v8 엔진 기반
// node --version 노드 버전 체크
// npm --version npm 버전 체크

// 실행 시킬려면 터미널에서 node filename를 입력한다.
// console.log(5 + 5); 10

// BROWSER JS
// 기본적으로 js는 브라우저내에서 동작 하는데 이 경우 가장 최상위에 window객체가 감싸고 있다.
// window.document.querySelector

// NODE
// node는 기본적으로 module화를 목적으로 한다.

const getUserInfo = require("./sayName");

console.log(getUserInfo);
