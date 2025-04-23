import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import cartIcon from '../assets/cart.png';
import userIcon from '../assets/user.png';
import logo from '../assets/Grosell.png';
import './Navbar.css';

const CategoryNav = ({ searchTerm, setSearchTerm }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-3">
      <div className="logo-section d-flex align-items-center">
        <div className="logo-box me-2">
          <img src={logo} alt="Logo" />
        </div>
      </div>

      <div className="collapse navbar-collapse justify-content-between">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item"><Link className="nav-link text-white" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link text-white" to="/products">Groceries</Link></li>
          <li className="nav-item"><Link className="nav-link text-white" to="/order">Orders</Link></li>
        </ul>

        <form className="d-flex w-50 me-3">
          <div className="input-group w-100">
            <input
              className="form-control"
              type="search"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="input-group-text bg-white"><FaSearch /></span>
          </div>
        </form>

        <div className="d-flex align-items-center gap-3">
          <Link to="/cart" className="cart-icon"><img src={cartIcon} alt="Cart" width={24} /></Link>
          <Link to="/user-profile" className="cart-icon"><img src={userIcon} alt="User" width={24} /></Link>
          <button className="btn btn-light btn-sm">Sign In</button>
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;



