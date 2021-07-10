DROP DATABASE IF EXISTS library;
CREATE DATABASE library;

USE library;

CREATE TABLE agents (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(70) NOT NULL,
  PRIMARY KEY(id)
);

INSERT INTO agents (id, name)
VALUES (1, 'Jane Doe'),
  (2, 'John Doe'),
  (3, 'Jim Doe');

CREATE TABLE authors (
  id INT NOT NULL AUTO_INCREMENT,
  agent_id INT,
  name VARCHAR(70) NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (agent_id) REFERENCES agents(id)
);

INSERT INTO authors (id, name, agent_id)
VALUES (1, 'J.K. Rowling', 1),
  (2, 'Gillian Flynn', 1),
  (3, 'Ann Brashares', 1),
  (4, 'Bill Shakespeare', 1),
  (5, 'Daniel Handler', null),
  (6, 'Maira Kalman', null),
  (7, 'Truman Pee', null);

CREATE TABLE books (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(50) NOT NULL,
  copies_sold INT,
  PRIMARY KEY(id)
);

INSERT INTO books (id, title, copies_sold)
VALUES (1, 'Harry P. and the Stone', 100),
  (2, 'HP and the Chamber', 12321),
  (3, 'HP and the Prisoner', 23423),
  (4, 'HP and the Goblet', 2342),
  (5, 'Gone Girl', 23423),
  (6, 'Sisterhood of the Pants', 234234),
  (7, 'Hamlet', 1),
  (8, 'R & J', 2),
  (9, 'Why We Broke Up', 0);




CREATE TABLE books_authors (
  author_id INT NOT NULL,
  book_id INT NOT NULL,
  FOREIGN KEY (author_id) REFERENCES authors(id) ON DELETE CASCADE,
  FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE CASCADE
);

INSERT INTO books_authors (book_id, author_id)
VALUES (1, 1),
  (2, 1),
  (3, 1),
  (4, 1),
  (5, 2),
  (6, 3),
  (7, 4),
  (8, 4),
  (9, 5),
  (9, 6);
