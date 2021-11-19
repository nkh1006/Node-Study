import express from 'express';
import multer, {diskStorage} from 'multer';
import cors  from 'cors';

const app = express();
app.use(cors());

const storage = diskStorage(
  {
    destination: (req,file,callback) => {
      callback(null, './public');
    },
    filename: (req,file,callback) => {
      const ext = file.mimetype.split("/")[1];
      callback(null,`${file.originalname}-${Data.now()}.${ext}`);
    }
  }
)

const fileFilter = (req,file,callback) => {
  const ext = file.mimetype.split("/")[1];
  if(ext !== 'jpeg') {
    callback(new Error('Not a JPEG file !'),false);
  }
  callback(null, true);
}

const multerUpload = multer({
  storage,
  fileFilter
});

const upload = multerUpload.single('myfile');

app.post('/upload', (req,res) => {
  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      res.json({ status: 'multer upload failed' });
      return
    } else if (err) {
      res.json({ status: 'upload failed' });
      return
    }
    console.log('received file information:', req.file);
    res.json({ status: 'success' });
  });
});