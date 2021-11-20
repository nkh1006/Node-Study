import express from 'express';

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.post('/api/data', (req, res) => {
  console.log(req.body);
  return res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("Application listening at http://localhost:3000");
});