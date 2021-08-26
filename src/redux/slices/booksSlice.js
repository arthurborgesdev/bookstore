const GET_BOOKS = 'books/booksslice/GET_BOOKS';
const GET_BOOKS_SUCCESS = 'books/booksslice/GET_BOOKS_SUCCESS';
const GET_BOOKS_ERR = 'books/booksslice/GET_BOOKS_ERR';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const bookStoreID = 'AuUAkr1MpC49B8QoMijD';

const booksURL = `${baseURL}${bookStoreID}/books/`;

const getBooks = () => async (dispatch) => {
  dispatch({ type: GET_BOOKS });
  const response = await fetch(booksURL);
  const books = await response.json();
  return dispatch({ type: GET_BOOKS_SUCCESS, books });
};

export {
  getBooks as default,
  GET_BOOKS,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_ERR,
};
