import React from 'react';

const BookNew = () => (
  <>
    <h2>ADD NEW BOOK</h2>
    <div className="add-book-form">
      <input placeholder="Book title" />
      <select name="categories" id="categories">
        <option value="action">Action</option>
        <option value="science-fiction">Science Fiction</option>
        <option value="economy">Economy</option>
      </select>
      <input type="submit" value="ADD BOOK" />
    </div>
  </>
);

export default BookNew;
