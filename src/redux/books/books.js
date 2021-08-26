import { createBook, deleteBook } from '../../api/bookstore';
import { GET_BOOKS, GET_BOOKS_SUCCESS, GET_BOOKS_ERR } from '../slices/booksSlice';

// Actions

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

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
      createBook(action.payload);
      return state;
    case REMOVE_BOOK:
    {
      const entries = Object.fromEntries(
        Object.entries(state.books).filter(([id]) => id !== action.payload),
      );
      deleteBook(action.payload);
      return { ...state, pending: false, books: entries };
    }
    case GET_BOOKS:
      return { ...state, pending: true };
    case GET_BOOKS_SUCCESS:
      return { ...state, pending: false, books: action.books };
    case GET_BOOKS_ERR:
      return { ...state, pending: false, error: action.error };
    default:
      return state;
  }
};

export default reducer;
