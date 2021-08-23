import React from 'react';
import PropTypes from 'prop-types';

import BookInfo from './BookInfo';
import BookActions from './BookActions';
import BookCompletionStatus from './BookCompletionStatus';
import BookProgress from './BookProgress';

const Book = ({ info }) => (
  <>
    <div className="book-first-column">
      <BookInfo info={info} />
      <BookActions />
    </div>
    <div className="book-remaining-column">
      <BookCompletionStatus percentage={info.percentage} />
      <BookProgress chapter={info.chapter} />
    </div>
  </>
);

Book.propTypes = {
  info: PropTypes.string.isRequired,
};

export default Book;
