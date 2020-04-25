const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// direct to static html file
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('this is your get request');

})

app.listen(port, () => `are you ready to play @ port ${port}`);