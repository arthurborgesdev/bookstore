import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import getBooks from '../redux/slices/booksSlice';

import { addBook } from '../redux/books/books';

const BookNew = () => {
  const [bookCategory, setBookCategory] = useState('');
  const [bookTitle, setBookTitle] = useState('');

  const handleBookCategoryChange = (e) => {
    setBookCategory(e.target.value);
  };

  const handleBookTitleChange = (e) => {
    setBookTitle(e.target.value);
  };

  const dispatch = useDispatch();

  const submitBookToStore = async (e) => {
    e.preventDefault();

    const newBook = {
      id: uuidv4(),
      category: bookCategory,
      title: bookTitle,
    };

    dispatch(addBook(newBook));
    setBookCategory('');
    setBookTitle('');
    await dispatch(getBooks());
    document.location.reload(true);
  };

  return (
    <div className="new-book-container">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={submitBookToStore} className="add-book-form">
        <input
          name="title"
          className="title-input"
          placeholder="Book title"
          value={bookTitle}
          onChange={handleBookTitleChange}
        />
        <select
          className="category-select"
          name="category"
          id="categories"
          value={bookCategory}
          onChange={handleBookCategoryChange}
        >
          <option defaultValue="">Category</option>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <input className="add-book-button" type="submit" value="ADD BOOK" />
      </form>
    </div>
  );
};

export default BookNew;
