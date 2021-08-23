import React from 'react';
import PropTypes from 'prop-types';

const BookCompletionStatus = ({ percentage }) => (
  <div className="book-completion-status">
    <i />
    <p className="completion-percentage">{percentage}</p>
    <p>Completed</p>
  </div>
);

BookCompletionStatus.propTypes = {
  percentage: PropTypes.string.isRequired,
};

export default BookCompletionStatus;
