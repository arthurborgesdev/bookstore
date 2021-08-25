import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import getBooks from '../redux/slices/booksSlice';

const BookStore = () => {
  const bookComponent = [];

  let bookStoreFetch = useSelector((store) => store.booksReducer.books);
  if (bookStoreFetch.error) {
    bookStoreFetch = [];
  } else {
    const bookIDs = Object.keys(bookStoreFetch);
    bookIDs.forEach((id) => {
      bookStoreFetch[id].map((book) => (
        bookComponent.push(
          <Book
            key={id}
            id={id}
            title={book.title}
            category={book.category}
          />,
        )
      ));
    });
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <>
      { bookComponent }
    </>
  );
};

export default BookStore;
