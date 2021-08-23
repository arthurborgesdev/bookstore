import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './components/Header';
import Book from './components/Book';
import BookNew from './components/BookNew';
import Categories from './components/Categories';

const booksInfo = [
  {
    id: 1,
    category: 'Action',
    name: 'The Hunger Games',
    author: 'Suzanne Collins',
    percentage: '64%',
    chapter: 'Chapter 17',
  },
  {
    id: 2,
    category: 'Science Fiction',
    name: 'Dune',
    author: 'Frank Herbert',
    percentage: '8%',
    chapter: 'Chapter 3: "A Lesson Learned"',
  },
  {
    id: 3,
    category: 'Economy',
    name: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    percentage: '0%',
    chapter: 'Introduction',
  },
];

const App = () => {
  const bookList = booksInfo.map((bookInfo) => <Book key={bookInfo.id} info={bookInfo} />);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          { bookList }
          <BookNew />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
