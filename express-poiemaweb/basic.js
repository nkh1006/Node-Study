const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = 3000;

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World !'));

app.post('/signin', (req, res) => {
  const { username, password } = req.body;
  res.send({ username, password });
});

// GET method route
app.get('/api/books', (req, res) => res.send('GET request to the /api/books'));

// POST method route
app.post('/api/books', (req, res) => res.send('POST request to the /api/books'));

// open server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

