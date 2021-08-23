import React from 'react';
import PropTypes from 'prop-types';

import BookInfo from './BookInfo';
import BookActions from './BookActions';
import BookCompletionStatus from './BookCompletionStatus';
import BookProgress from './BookProgress';

const Book = ({ info }) => (
  <div className="book-row">
    <div className="book-first-column">
      <BookInfo category={info.category} name={info.name} author={info.author} />
      <BookActions />
    </div>
    <div className="book-remaining-column">
      <BookCompletionStatus percentage={info.percentage} />
      <BookProgress chapter={info.chapter} />
    </div>
  </div>
);

Book.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.number,
    category: PropTypes.string,
    name: PropTypes.string,
    author: PropTypes.string,
    percentage: PropTypes.string,
    chapter: PropTypes.string,
  }).isRequired,
};

export default Book;
