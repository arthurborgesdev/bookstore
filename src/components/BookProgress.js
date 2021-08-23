import React from 'react';
import PropTypes from 'prop-types';

const BookProgress = ({ chapter }) => (
  <div className="book-progress">
    <p>CURRENT CHAPTER</p>
    <p className="book-progress-chapter">{chapter}</p>
    <button type="button">UPDATE PROGRESS</button>
  </div>
);

BookProgress.propTypes = {
  chapter: PropTypes.string.isRequired,
};

export default BookProgress;
