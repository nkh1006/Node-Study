import express, { Application, NextFunction, Request, Response } from 'express';
import { Server } from 'http';
import createHttpError from 'http-errors';

const app: Application = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello from ts app");
});

app.use((req: Request, res: Response, next: NextFunction) => {
  next(new createHttpError.NotFound());
})

const server: Server = app.listen(3000, () => console.log(`🧨 is on Port 3000`));