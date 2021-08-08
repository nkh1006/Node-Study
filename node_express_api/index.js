import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server Running on port: http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  console.log('[TEST]!');
  res.send('Hello from Homepage');
});

app.use('/users', usersRoutes);