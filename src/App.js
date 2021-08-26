import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import BookStore from './components/BookStore';
import BookNew from './components/BookNew';
import Categories from './components/Categories';
import store from './redux/configureStore';

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/">
            <BookStore />
            <BookNew />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
