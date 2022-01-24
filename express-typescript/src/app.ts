import express, {NextFunction, Request, Response} from 'express';

const app = express();

app.use(express.json());
// app.use(express.urlencoded({extended: true}));

app.route('/api/books')
.get((req: Request, res: Response) => {
  return res.send('You make a GET request');
})
.post((req: Request, res: Response) => {
  return res.send('You make a POST request');
})
.put((req: Request, res: Response) => {
  return res.send('You make a PUT request');
})
.all((req: Request, res: Response) => {
  return res.send('You make an X request');
})

app.get('/health', (req, res) => res.sendStatus(200));
app.get('/ab*cd', (req, res) => res.send("/ab*cd"));
app.get('/abc/', (req, res) => res.send("abc"));

const handleGetBookOne = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.params);
  next();
};

const handleGetBookTwo = (req: Request, res: Response, next: NextFunction) => {
  console.log('second handler');
  return res.send(req.params);
};

// app.get('/api/book/:bookId/:authorId', handleGetBookOne, handleGetBookTwo);

app.get(
  "/api/books/:bookId/:authorId",
  (req: Request, res: Response, next: NextFunction) => {
    next();
  },
  (req: Request, res: Response, next: NextFunction) => {
    return res.send(req.params);
  }
)

app.get("/", (req: Request, res: Response) => {
  return res.redirect("http://example.com");
});

app.post('/api/data', (req: Request, res: Response) => {
  console.log(req.body);

  return res.sendStatus(200);
});

app.all('/api/all', (req: Request, res: Response) => {
  return res.sendStatus(200);
});

app.listen(3000, () => {
  console.log(`Application listening at http://localhost:3000`);
});