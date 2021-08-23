import React from 'react';

const BookInfo = (props) => {
  return (
    <div>
      <p className="book-category">{props.category}</p>
      <p className="book-name">{props.name}</p>
      <p className="book-author">{props.author}</p>
    </div>
  )
}

export default BookInfo;