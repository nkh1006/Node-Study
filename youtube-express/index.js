import Express from 'express';

const app = Express();
const PORT = 3000;

// GET, PUT, POST, DELETE

app.get("/", (req, res) => {
  // res.send("Hello World");

  res.json()
});

app.listen(PORT, () => {
  console.log("listening on port", PORT);
})