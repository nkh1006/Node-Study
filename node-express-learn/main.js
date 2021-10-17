const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>What color is the sky on a clear day?</h1>
    <form action="/result" method="POST">
      <input type="text" name="color" />
      <button>Submit Answer</button>
    </form>
  `);
});

app.get('/about', (req, res) => {
  res.send("Thanks for learning more about us.");
});

app.post('/result', (req, res) => {
  res.send("<h1>Thank you for submitting the form.</h1>");
});

app.listen(3000, () => {
  console.log('Server running ...');
});