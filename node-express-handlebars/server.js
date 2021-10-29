const express = require('express');
const expbs = require('express-handlebars');
const path = require('path');

const app = express();

app.engine('handlebars', expbs({ 
  defaultLayout: 'main', 
  layoutsDir: path.join(__dirname, 'views/mainLayout')
}));
app.set('view engine', 'handlebars');

// Routing
app.get('/', (req, res) => {
  res.render("index", { 
    title: 'Home Page',
    name: 'my Name',
    age: 5,
    isDisplayName: true,
    isAgeEnabled: true
  });
});

app.get('/about', (req, res) => {
  res.render("about", { title: 'About Me' });
});

app.get('/dashboard', (req, res) => {
  res.render("dashboard", { 
    isListEnabled: false
  });
});

app.listen(8080, () => {
  console.log('Server is starting at port', 8080);
});