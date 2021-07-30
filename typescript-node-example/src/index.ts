import express from 'express';

const app = express();

interface Params {
  a: number;
  b: number;
}

const add = (x: Params) => {
  return x.a + x.b;
}

app.get('/', (req: any) => {
  add({ a: 1, b: 5 });
});

app.listen(3001, () => {
  console.log('started');
});