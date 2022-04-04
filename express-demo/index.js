const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(exppppppp)

const courses = [
  { id: 1, name: 'course1' },
  { id: 2, name: 'course2' },
  { id: 3, name: 'course3' }
]

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
  res.send([1, 2, 3]);
});

app.post('/api/curses1', () => {

})

app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send('The course with the given ID');
  res.send(course);
});

app.get('/api/posts/:year/month', (req, res) => {
  res.send(req.params);
});

app.listen(PORT, () => console.log(`Listening Server on port ${PORT}`));