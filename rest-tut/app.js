const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send("We are on home");
});

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true}
  , () => {
    console.log('Connected to DB !'); 
  }
);

app.listen(3000, () => {
  console.log(`Server running on 3000 port`);
});