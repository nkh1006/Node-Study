import express, {Request, Response} from 'express';

const app = express();

app.use(express.json());
// app.use(express.urlencoded({extended: true}));

app.get('/', (req: Request, res: Response) => {
  // return res.send('Hello World');
  // return res.json({
  //   success: true,
  //   name: "Tom"
  // });
  return res.redirect('http://example.com');  
});

app.post('/api/data', (req: Request, res: Response) => {
  console.log(req.body);
  return res.sendStatus(200);
});

app.all('/api/all', (req: Request, res: Response) => {
  return res.sendStatus(200);
});

app
.route('/api/books')
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
  return res.send('You make a X request');
});

app.get('/health', r));

app.listen(3000, () => {
  console.log(`Application listening at http://localhost:3000`);
});