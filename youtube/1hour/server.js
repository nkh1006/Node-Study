const express = require('express');
const app = express();

const server = app.listen(3000, () => {
    console.log('Server Start : localhost:3000');
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
    res.render('index.html');
});

app.get('/about', (req, res) => {
    res.send('about page');
});