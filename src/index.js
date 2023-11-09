import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => <img src="./images/book-1.jpg" alt="The Woman in Me" />;
const Title = () => <h2>The Woman in Me</h2>;
const Author = () => {
  return <h4>Britney Spears</h4>;
};
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
