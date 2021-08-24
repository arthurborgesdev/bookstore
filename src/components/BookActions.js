import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { removeBook } from '../redux/books/books';

const BookActions = ({ id }) => {
  const dispatch = useDispatch();

  const handleBookRemoval = () => {
    dispatch(removeBook({ id }));
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
