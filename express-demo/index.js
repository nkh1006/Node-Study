const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    { id: 1, name: 'course 1' },
    { id: 2, name: 'course 2' },
    { id: 3, name: 'course 3' },
];

// get(path, callback(req, res))
app.get('/', (req, res) => {
    res.send('Hello World');
});

// another path
app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with the given Id !'); // 404 not found
    res.send(course);
});

// post(path, callback(req, res))
app.post('/api/courses', (req, res) => {
    const schema = {
        name: Joi.string().min(3).require()
    };

    const result = Joi.validate(req.body, schema);
    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
    // Look up the course
    // If not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with the given Id !'); // 404 not found    

    // Validate
    // If invalid, return 400 - Bad request
    const schema = {
        name: Joi.string().min(3).require()
    };

    const result = Joi.validate(req.body, schema);
    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }    

    // Update course
    course.name = req.body.name;
    res.send(course);
    // Return the updated Course
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`${port} ... !`));