import React from 'react';
import PropTypes from 'prop-types';

import BookInfo from './BookInfo';
import BookActions from './BookActions';
import BookCompletionStatus from './BookCompletionStatus';
import BookProgress from './BookProgress';

const Book = ({ title, author, category }) => (
  <div className="book-row">
    <div className="book-first-column">
      <BookInfo title={title} author={author} category={category} />
      <BookActions />
    </div>
    <div className="book-remaining-column">
      <BookCompletionStatus />
      <BookProgress />
    </div>
  </div>
);

Book.propTypes = ({
  category: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
}).isRequired;

export default Book;
