import React from 'react';
import './Navbar.css';

const Nav = ({ setSearchPrice }) => {
  return (
    <nav className="navbar">
      <div className="nav-left">Vegetable Store</div>
      <input
        type="number"
        placeholder="Search by max price"
        onChange={(e) => setSearchPrice(e.target.value)}
        className="search-bar"
      />
      <div className="nav-icons">
        <span className="nav-icon">👤 User</span>
        <span className="nav-icon">🛒 Cart</span>
      </div>
    </nav>
  );
};

export default Nav;