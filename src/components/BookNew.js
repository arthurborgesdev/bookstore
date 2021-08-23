import React from 'react';

const BookNew = () => {
  return (
    <>
      <h2>ADD NEW BOOK</h2>
      <div className="add-book-form">
        <input placeholder="Book title"></input>
        <select></select>
        <input type="submit" value="ADD BOOK"></input>
      </div>
    </>
  )
}

export default BookNew; 