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

// routes
app.get('/authors/:id', (req, res, next) => {
  let authorId = req.params.id;
  queries.getAuthors(authorId, (err, authors) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(authors);
    }
  })
});

app.post('/book', (req, res) => {
  let book = req.body;
  queries.addBook(book, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(201).send('book successfully added!');
    }
  })
});

app.patch('/author/:id', (req, res) => {
  queries.updateAuthor(req.params.id, req.body.name, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(201).send('name successfully updated!');
      // console.log(results)
    }
  })
});

app.delete('/book', (req, res) => {
  let title = req.query.bookTitle;
  console.log(title);
  queries.deleteBook(title, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send('book deleted');
    }
  })
});

// tell server to listen on predefined port
app.listen(PORT, () => {
  console.log(`Express listenting on port ${PORT}`);
});

/*
Example curl commands:

curl -d '{"name":"Truman Purnell"}' -H "Content-Type: application/json" -X PATCH http://localhost:3000/author/7
curl -X DELETE http://localhost:3000/book?bookTitle=Gone%20Girl */