import React from 'react';
import {
  Link,
} from 'react-router-dom';

const Header = () => (
  <div className="header-bar">
    <div className="title-navbar">
      <h1 className="title-h1">Bookstore CMS</h1>
      <nav className="nav-links">
        <ul className="nav-list">
          <li>
            <Link to="/">BOOKS</Link>
          </li>
          <li>
            <Link to="/categories">CATEGORIES</Link>
          </li>
        </ul>
      </nav>
    </div>
    <span><i className="fas fa-user-alt" /></span>
  </div>
);

export default Header;
