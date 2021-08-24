import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BookStore = () => {
  const bookStore = useSelector((store) => store.booksReducer);
  const bookComponent = bookStore.map(
    (book) => (
      <Book
        key={book.id}
        id={book.id}
        title={book.title}
        author={book.author}
        category={book.category}
      />
    ),
  );

  return (
    <>
      { bookComponent }
    </>
  );
};

export default BookStore;
