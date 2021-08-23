import './App.css';

import Header from './components/Header';
import Book from './components/Book';
import BookNew from './components/BookNew';

const booksInfo = [
  {
    id: 1,
    category: 'Action',
    name: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: 2,
    category: 'Science Fiction',
    name: 'Dune',
    author: 'Frank Herbert',
  },
  {
    id: 3,
    category: 'Economy',
    name: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
  },
];

const App = () => {
  const bookList = booksInfo.map((bookInfo) => <Book key={bookInfo.id} info={bookInfo} />);
  return (
    <>
      <Header />
      { bookList }
      <BookNew />
    </>
  );
};

export default App;
