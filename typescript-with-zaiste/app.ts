import http from 'http';

http.createServer((req, res) => {
  res.end('Hello, World');
})
.listen(3000, () => console.log("Server started"));

/*
let message: string = "Hello World";
console.log(message);

function compute(a: number, b: number) {
  return a * b;
}

console.log(compute(2, 3));
*/