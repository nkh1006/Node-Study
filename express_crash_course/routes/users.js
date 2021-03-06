const express = require("express");
const router = express.Router();

/*
  router.route('/:id').get((req, res) => {
    res.send('User List');
  }).post((res, res) => {
    res.send('Create User');
  });
*/

router.get('/', (req, res) => {
  console.log(req.user);
  res.send('User List');
});

router.post('/', (req, res) => {
  const isValid = false;
  if (isValid) {
    users.push({ firstName: req.body.firstName })
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log('Error');
    res.render('users/new', { firstName: req.body.firstName })
  }
  console.log(req.body.firstName);
  res.send('Hi');
});

router.get('/new', (req, res) => {
  res.render('users/new', { firstName: 'Test' });
});

router.get('/:id', (req, res) => {
  console.log(req.user);
  res.send(`Get User With ID ${req.params.id}`);
});

router.put('/:id', (req, res) => {
  res.send(`Update User With ID ${req.params.id}`);
});

router.put('/:delete', (req, res) => {
  res.send(`Delete User With ID ${req.params.id}`);
});

const users = [{name: "Kyle"}, {name: "Sally"}];
router.param('id', (req, res, next, id) => {
  req.user = users[id];
  next();
;})

module.exports = router;