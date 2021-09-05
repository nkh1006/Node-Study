const url = require("url");

const adress = "http://localhost:8080/default.html?year=2017&month=february";

const paresdUrl = url.parse(adress, true);

// 기본적인 정보가 다 들어가 있다.
// console.log(paresdUrl);

console.log(paresdUrl.query);