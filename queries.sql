-- Show all books by all authors
SELECT authors.*,
  books.*
FROM books_authors
  INNER JOIN authors ON authors.id = books_authors.author_id
  INNER JOIN books ON books.id = books_authors.book_id;
-- JOINS! examples
select *
from authors
  left join agents on authors.agent_id = agents.id;
select *
from authors
  inner join agents on authors.agent_id = agents.id;
select *
from authors
  right join agents on authors.agent_id = agents.id;
-- Aggregations
SELECT authors.name,
  SUM(books.copies_sold)
FROM books_authors
  INNER JOIN books ON books.id = books_authors.book_id
  INNER JOIN authors ON authors.id = books_authors.author_id
GROUP BY authors.id;