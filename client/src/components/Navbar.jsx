import React from 'react';
import { Link } from 'react-router-dom';
import cartIcon from '../assets/cart.png'; // Ensure path is correct
import userIcon from '../assets/user.png';
import logo from '../assets/Grosell.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-section">
        <div className="logo-box">
          <img src={logo} alt="Logo" />
        </div>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Groceries</Link></li> {/* Link to /products */}
        <li><Link to="/order">Orders</Link></li>
      </ul>

      <div className="right-section">
        <Link to="/cart" className="cart-icon">
          <img src={cartIcon} alt="Cart" width={24} />
        </Link>
        <Link to="/user-profile" className="cart-icon">
          <img src={userIcon} alt="User" width={24} />
        </Link>
        
<Link to="/register">
  <button className="sign-in-btn">Sign Up</button>
</Link>
      </div>
    </nav>
  );
};

export default Navbar;


