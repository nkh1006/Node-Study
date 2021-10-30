const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  console.log(req.headers);
  res.json('GET / success');
});

router.delete('/item', (req, res) => res.json('DELETE /item success'));

module.exports = router;