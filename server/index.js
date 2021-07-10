const express = require('express');
const cors = require('cors');
const queries = require('../database/queries.js');

// set port where server will listen
const PORT = 3000;
// create server
const app = express();

// MIDDLEWARE at global level
// serve static files from dist dir
app.use(express.static(__dirname + '/../client/dist'));
// parse JSON
app.use(express.json());
// use cors middleware for enabling CORS with various options
app.use(cors());

// routes go here :)

// tell server to listen on predefined port
app.listen(PORT, () => {
  console.log(`Express listenting on port ${PORT}`);
});
