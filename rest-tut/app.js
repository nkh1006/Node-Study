const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

// Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

// Middlewares
app.use('/posts', () => {
  console.log('This is a middleware running');
});

// ROUTES
app.get('/', (req, res) => {
  res.send('We are on home');
});

// Connect To DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true },
  () => { console.log('connected to DB !');}
);

// HOW to we start lisitening to the server
app.listen(3000);

