import React from 'react';

import BookInfo from './BookInfo';
import BookActions from './BookActions';
import BookCompletionStatus from './BookCompletionStatus';
import BookProgress from './BookProgress';

const Book = () => {
  return (
    <>
      <div class="book-first-column">
        <BookInfo />
        <BookActions />
      </div>
      <div class="book-remaining-column">
        <BookCompletionStatus />
        <BookProgress /> 
      </div>
    </>
  )
}

export default Book;