const express = require('express');

const app = express();

// Middlewares
/*
  app.use('/posts', () => {
    console.log('This is a middleware running');
  });
*/

app.use(auth);

// ROUTES
app.get('/', (req, res) => {
  res.send('We are on home');
});

app.get('/posts', (req, res) => {
  res.send('We are on posts');
});

// How to we start listening to the server
app.listen(3000);