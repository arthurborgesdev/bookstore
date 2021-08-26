import React from 'react';

const BookCompletionStatus = () => (
  <div className="book-completion-status">
    <div className="arc-wrapper">
      <div className="arc arc-start" />
      <div className="arc arc-end" />
    </div>
    <div className="completion-status">
      <p className="book-completion-percentage">75%</p>
      <p className="completed-text">Completed</p>
    </div>
  </div>
);

export default BookCompletionStatus;
