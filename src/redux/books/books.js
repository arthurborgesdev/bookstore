import { addBook, getBooks, removeBook } from '../../api/bookstore';

// Actions

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';

// Initial state

const initialState = {
  books: [],
  pending: false,
  error: null,
};

// Action Creators

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

// Reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      addBook(action.payload);
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export default reducer;
