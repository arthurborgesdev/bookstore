import React from 'react';

const BookProgress = () => {
  return (
    <div>
      <p>CURRENT CHAPTER</p>
      <p className="book-progress-chapter"></p>
      <button>UPDATE PROGRESS</button>
    </div>
  )
}

export default BookProgress;