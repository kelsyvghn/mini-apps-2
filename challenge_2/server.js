const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;
const axios = require('axios');

// import middleware for body parser and json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// to display static file
app.use(express.static(path.join(__dirname, '/public')));

app.get('/bitcoin', (req, res) => {
  // console.log(req)
  axios({
    method: 'GET',
    url: 'https://api.coindesk.com/v1/bpi/historical/close.json'
  })
  .then((data) => {
    // console.log(Object.keys(data.data));
    res.send(data.data)
  })
  .catch((err) => res.send(err));
})

app.listen(port, () => console.log(`Do you read me @ port ${port}?`))