const express = require('express');
const app = express();
const port = 3000;

const router = express.Router();
// app.get('/', (req, res) => res.send('Hello World!'))
// app.get('/haha', (req, res) => res.send('Hello World! haha'))
app.use(router);

router.get('/haha', (req, res) => res.send('Hello World! /haha'));
router.get('/haha/good', (req, res) => res.send('Hello World! /haha/good'));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
