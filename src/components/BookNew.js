import React from 'react';

const BookNew = () => (
  <>
    <h2>ADD NEW BOOK</h2>
    <div className="add-book-form">
      <input className="book-input" placeholder="Book title" />
      <select className="category-select" name="categories" id="categories">
        <option defaultValue="">Category</option>
        <option value="action">Action</option>
        <option value="science-fiction">Science Fiction</option>
        <option value="economy">Economy</option>
      </select>
      <input className="add-book-button" type="submit" value="ADD BOOK" />
    </div>
  </>
);

export default BookNew;
