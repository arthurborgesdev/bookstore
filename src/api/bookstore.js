const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const bookStoreID = 'AuUAkr1MpC49B8QoMijD';

const booksURL = `${baseURL}${bookStoreID}/books/`;

const createBook = async (obj) => {
  const bookBody = {
    item_id: obj.id,
    title: obj.title,
    category: obj.category,
  };

  const results = await fetch(booksURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(bookBody),
  });

  return results.status;
};

const deleteBook = async (id) => {
  const results = await fetch(`${booksURL}${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });

  return results.status;
};

export { createBook, deleteBook };
