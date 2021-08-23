import React from 'react';
import PropTypes from 'prop-types';

const BookInfo = ({ category, name, author }) => (
  <div>
    <p className="book-category">{category}</p>
    <p className="book-name">{name}</p>
    <p className="book-author">{author}</p>
  </div>
);

BookInfo.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookInfo;
