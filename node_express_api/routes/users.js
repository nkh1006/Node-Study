import express from 'express';

const router = express.Router();

const user = [
  {
    firstname: "John",
    lastName: "Doe",
    age: 25
  }  
]


// all routes in here are starting with /users
router.get('/', (req, res) => {
  
  res.send('Hello Users !');
});

export default router;