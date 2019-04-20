import React from 'react';
import {Link} from 'react-router-dom';

/**
 * Returns Header component
 * @return {string} HTML of a component
 */
export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>To-Do List</h1>
      <Link className="link link--first" to="/">
        Home
      </Link>
      |
      <Link className="link" to="/about">
        About
      </Link>
    </header>
  );
}

const headerStyle = {
  background: '#404040',
  color: '#fff',
  padding: '1rem',
};
