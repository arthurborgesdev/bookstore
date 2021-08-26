import React from 'react';
import PropTypes from 'prop-types';

const BookInfo = ({ title, category }) => (
  <div>
    <p className="book-category">{category}</p>
    <p className="book-title">{title}</p>
  </div>
);

BookInfo.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookInfo;
