const express = require('express');
const app = express();

const server = app.listen(3000, () => {
    console.log('Server Start : localhost:3000');
});

