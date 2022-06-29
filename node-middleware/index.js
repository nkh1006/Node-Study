const express = require("express");
const app = express();

app.use(express.json());

const checkIfPedro = (req, res, next) => {
  const name = req.body.name;
  if (name === "Pedro") {
    res.json({error: "Yo, we don't allow Pedro here!"});
  } else {
    next();
  }
}

app.use((req, res, next) => {
  console.log("Middleware Called!");
  next();
});

app.post("/", checkIfPedro, (req, res) => {
  res.send("You logged In!");
});

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(3001, () => {
  console.log("Server running !");
});