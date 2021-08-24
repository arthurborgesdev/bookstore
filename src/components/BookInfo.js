import React from 'react';
import PropTypes from 'prop-types';

const BookInfo = ({ title, author, category }) => (
  <div>
    <p className="book-category">{category}</p>
    <p className="book-title">{title}</p>
    <p className="book-author">{author}</p>
  </div>
);

BookInfo.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookInfo;
