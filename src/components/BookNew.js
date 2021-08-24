import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';

import { addBook } from '../redux/books/books';

const BookNew = () => {
  const [bookCategory, setBookCategory] = useState('');
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');

  const handleBookCategoryChange = (e) => {
    setBookCategory(e.target.value);
  };

  const handleBookTitleChange = (e) => {
    setBookTitle(e.target.value);
  };

  const handleBookAuthorChange = (e) => {
    setBookAuthor(e.target.value);
  };

  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();

    const newBook = {
      id: uuidv4(),
      category: bookCategory,
      title: bookTitle,
      author: bookAuthor,
    };

    dispatch(addBook(newBook));
    setBookCategory('');
    setBookTitle('');
    setBookAuthor('');
  };

  return (
    <>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={submitBookToStore} className="add-book-form">
        <input
          name="title"
          className="title-input"
          placeholder="Book title"
          value={bookTitle}
          onChange={handleBookTitleChange}
        />
        <input
          name="author"
          className="author-input"
          placeholder="Book author"
          value={bookAuthor}
          onChange={handleBookAuthorChange}
        />
        <select
          className="category-select"
          name="category"
          id="categories"
          value={bookCategory}
          onChange={handleBookCategoryChange}
        >
          <option defaultValue="">Category</option>
          <option value="action">Action</option>
          <option value="science-fiction">Science Fiction</option>
          <option value="economy">Economy</option>
        </select>
        <input className="add-book-button" type="submit" value="ADD BOOK" />
      </form>
    </>
  );
};

export default BookNew;
