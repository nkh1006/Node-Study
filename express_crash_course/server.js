// import express
const express = require('express');
// create express
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(logger);
app.set('view engine', 'ejs');

/*
  * get (path, (callback))
  * callback (req, res, next)
  * req: require
  * res: response
  * next: next
*/
app.get('/', (req, res) => {
  res.render('index', { text: 'world' });
  // res.sendStatus(500).send('500 erorr');
  // res.status(500);
  // res.send('/ page');
  // res.download("server.js");
  // res.json({ message: 'Error 500' });
});

const userRouter = require('./routes/users');
const postRouter = require('./routes/users');

app.use('/users', userRouter);
app.use('/posts', postRouter);

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}


// start server
app.listen(3000, () => {
  console.log('start server on port 3000');
});