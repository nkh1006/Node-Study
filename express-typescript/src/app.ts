import { Console } from 'console'
import express, {NextFunction, Request, Response} from 'express'

const app = express()

app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

/*
app.route('/')
.get((req: Request, res: Response) => {
  return res.send('You make a GET request')
})
.post((req: Request, res: Response) => {
  return res.send('You make a GET request')
})
.put((req: Request, res: Response) => {
  return res.send('You make a PUT request')
}),
((req: Request, res: Response) => {
  return res.send('You make an PUT request')
})
*/

app.get("/", (req: Request, res: Response) => {
  /*
  return res.json({
    sucess: true,
    name: 'TomDoesTech'
  })
  */
 return res.redirect('http://example.com')
})

function middleware(req: Request, res: Response, next: NextFunction) {
  // @ts-ignore
  req.name = 'Tom'
  /*
  console.log(req.params);

  next();
  */
}

function handleGetBookTwo(req: Request, res: Response, next: NextFunction) {
  console.log('second handler');

  return res.send(req.params);
}

app.get('/api/books/:bookId/:authorId', middleware, (req: Request, res: Response, next: NextFunction) => {
  // @ts-ignore
  console.log(req.name);
  next();
});

/*
app.get('/health', (req, res) => res.sendStatus(200));
app.get('/ab*cd', (req, res) => res.send("/ab*cd"));
app.get(/abc/, (req,res) => res.send("abc"));

app.post('/api/data', (req: Request, res: Response) => {
  console.log(req.body)

  return res.sendStatus(200)
})

app.all('/api/all', (req: Request, res: Response) => {
  return res.sendStatus(200)
})
*/

app.listen(3000, () => {
  console.log(`Application listening at http://localhost:3000`)
})