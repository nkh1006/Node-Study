const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//ROUTES
app.get('/', (req,res) => {
  res.send('We are on home');
});

//Connect To DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParsser: true }, () => {
  console.log('connected to DB');
});

//How to we start lisitening to the server
app.listen(3000);
