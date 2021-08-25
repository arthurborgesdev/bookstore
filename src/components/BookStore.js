import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import getBooks from '../redux/slices/booksSlice';

const BookStore = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);
  let bookStore = useSelector((state) => state.booksReducer.books);
  if (bookStore.error) { bookStore = []; }
  const bookComponent = bookStore.map(
    (book) => (
      <Book
        key={book.id}
        id={book.id}
        title={book.title}
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
