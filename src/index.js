import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const books = [
  {
    author: 'Britney Spears',
    title: 'The Woman in Me',
    img: './images/book-1.jpg',
    id: 1,
  },

  {
    author: 'Mo Willems',
    title: "Don't let the Pigeon Drive the Sleigh!",
    img: './images/book-2.jpg',
    id: 2,
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const Book = ({ author, title, img }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
