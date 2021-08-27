import React from 'react';
import PropTypes from 'prop-types';

import BookInfo from './BookInfo';
import BookActions from './BookActions';
import BookCompletionStatus from './BookCompletionStatus';
import BookProgress from './BookProgress';

const Book = (
  {
    id, title, category,
  },
) => (
  <div className="book-row">
    <div className="book-first-column">
      <BookInfo title={title} category={category} />
      <BookActions id={id} />
    </div>
    <div className="book-remaining-column">
      <div className="completion-container">
        <BookCompletionStatus />
      </div>
      <BookProgress />
    </div>
  </div>
);

Book.propTypes = ({
  id: PropTypes.number,
  category: PropTypes.string,
  title: PropTypes.string,
}).isRequired;

export default Book;
