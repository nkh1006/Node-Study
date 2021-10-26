// nodemon
// nodemon은 nodeJS에서 사용되는 npm module로써 node환경에서 개발시에
// 파일에 변환가 있을시에 자동을 재시작되게 도와주는 npm module이다.

// 설치
// npm install nodemon --save (npm i nodemon)

// 사용법
// node실행시에 node filename 대신 nodemon filename으로 변경

// 기타 설정파일
// nodemon.json이라는 파일을 만들거나
// package.json에 nodemonConfig 이라는 객체를 만들어서 그쪽에다가 설정 config값을 넣어놓는다.

// https://www.npmjs.com/package/nodemon

const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log("Thanks for the request");
})
.listen(PORT, () => {
  console.log("I'm listening");
});