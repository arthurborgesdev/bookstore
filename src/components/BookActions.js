import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import getBooks from '../redux/slices/booksSlice';
import { removeBook } from '../redux/books/books';

const BookActions = ({ id }) => {
  const dispatch = useDispatch();

  const handleBookRemoval = () => {
    console.log(id);
    dispatch(removeBook(id));
    dispatch(getBooks());
  };

  return (
    <div className="book-actions">
      <a href="/#">Comments</a>
      {' | '}
      <a href="/#" onClick={handleBookRemoval}>Remove</a>
      {' | '}
      <a href="/#">Edit</a>
    </div>
  );
};

BookActions.propTypes = ({
  id: PropTypes.number,
}).isRequired;

export default BookActions;
