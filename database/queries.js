const connection = require('./index')

const getAuthors = (agentId, cb) => {
  connection.query(
    `SELECT * FROM authors WHERE
    agent_id = (SELECT id FROM agents WHERE id = ?)`,
    [agentId],
    (err, authors) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, authors);
      }
    })
};

const addBook = (book, cb) => {
  connection.query(
    `INSERT INTO books (title, copies_sold)
    VALUES (?,?)`,
    [book.title, Number(book.copies)],
    (err, bookResults) => {
      if (err) {
        cb(err, null);
      } else {
        connection.query(
          `INSERT INTO books_authors (author_id, book_id)
          VALUES (?,?)`,
          [Number(book.authorId), bookResults.insertId],
          (err, results) => {
            if (err) {
              cb(err, null);
            } else {
              cb(null, results);
            }
          }
        )
      }
    })
};

const updateAuthor = (authorId, name, cb) => {
  connection.query(
    `UPDATE authors
    SET name = ?
    WHERE id = ?`,
    [name, Number(authorId)],
    (err, results) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, results);
      }
    })
};

const deleteBook = (bookTitle, cb) => {
  connection.query(
    `DELETE FROM books
    WHERE title = ?`,
    [bookTitle],
    (err, results) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, results);
      }
    })
};

module.exports = {
  getAuthors,
  addBook,
  updateAuthor,
  deleteBook,
};
