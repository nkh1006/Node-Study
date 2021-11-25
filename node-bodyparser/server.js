const express = require('express');
const app = express();

// global
app.use(logger);

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/users', auth, (req, res) => {
  console.log(`User is admin = ${req.admin}`);
  console.log('Users Page');
  res.send('User Page');
});

function logger(req, res, next) {
  console.log('before');
  next();
  console.log('after');
}

function auth(req, res, next) {
  console.log('Check auth');
  if(req.query.admin === true) {
    req.admin = true;
    next();
    return;
  }
  console.log('No auth');
}

app.listen(3000);