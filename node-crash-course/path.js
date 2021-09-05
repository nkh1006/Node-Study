const path = require("path");

// 파일 위치
const fileLocation = path.join(__dirname, 'app.js');

// 파일명
const fileName = path.basename(fileLocation);

// 파일 확장자
const fileExt = path.extname(fileName);

console.log(fileLocation);