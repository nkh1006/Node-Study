import express, {Request, Response, NextFunction, Application} from 'express';
import { Server } from 'http';

const app: Application = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello from ts app');
});

app.use((req: Request, res: Response, next: NextFunction) => {
  next(new Error);
});

app.listen(3000, () => {
  ('🚀 is on Port 3000');
});