import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Homepage.css';

import vegetablesImage from './assets/vegetables.jpg';
import fruitsImage from './assets/fruits.jpg';
import dairyImage from './assets/dairy.jpg';
import brocolliimage from './assets/brocolli.jpg';
import cheddarcheese from './assets/cheddar.jpg';
import milk from './assets/milk.jpg';

import Navbar from './components/Navbar.jsx';

const featuredCategories = [
  { id: 1, name: 'Fresh Vegetables', image: vegetablesImage },
  { id: 2, name: 'Fruits', image: fruitsImage },
  { id: 3, name: 'Dairy & Cheese', image: dairyImage },
];

const bestSellingProducts = [
  { id: 2, name: 'Whole Milk', price: 3.00, image: milk },
  { id: 4, name: 'Broccoli', price: 1.75, image: brocolliimage },
  { id: 5, name: 'Cheddar Cheese', price: 6.00, image: cheddarcheese },
];

const Button = ({ variant, className, children, ...props }) => {
  let buttonClass = 'btn';
  if (variant === 'default') {
    buttonClass += ' btn-secondary';
  } else if (variant === 'outline') {
    buttonClass += ' btn-outline-primary';
  }
  if (className) {
    buttonClass += ` ${className}`;
  }
  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

const Homepage = () => {
  return (
    <div className="bg-light">
      <Navbar />

      <section className="hero-section bg-success text-white text-center py-5">
        <div className="container">
          <h2 className="display-4 font-weight-bold">Your One-Stop Grocery Store</h2>
          <p className="lead">Fresh, high-quality products delivered to your doorstep.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <h2 className="section-title text-center mb-4">Featured Categories</h2>
          <div className="row justify-content-center">
  {featuredCategories.map(category => (
    <div key={category.id} className="col-6 col-md-3 mb-4">
      <div className="category-card">
        <img src={category.image} alt={category.name} className="category-image" />
        <h3 className="category-title">{category.name}</h3>
      </div>
    </div>
  ))}
</div>

        </div>
      </section>

      <section className="section-padding">
      <div className="container">
        <h2 className="section-title text-center mb-4">Shop by Category</h2>
        <div className="category-row">
          <Link to="/vegetables" className="category-link">
            <div className="category-banner bg-vegetables">
              <h3>Vegetables</h3>
              <span className="chevron-right">&raquo;</span>
            </div>
          </Link>
          <Link to="/fruits" className="category-link">
            <div className="category-banner bg-fruits">
              <h3>Fruits</h3>
              <span className="chevron-right">&raquo;</span>
            </div>
          </Link>
          <Link to="/dairy" className="category-link">
            <div className="category-banner bg-dairy">
              <h3>Dairy</h3>
              <span className="chevron-right">&raquo;</span>
            </div>
          </Link>
        </div>
      </div>
    </section>

      <section className="bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3">
              <h4 className="mb-3">Contact Us</h4>
              <p><span className="map-pin-icon mr-1">&#128205;</span>Dharmpeth , Nagpur</p>
              <p><span className="phone-icon mr-1">&#9742;</span> +1 555-123-4567</p>
              <p><span className="mail-icon mr-1">&#9993;</span> info@grosell.com</p>
            </div>
            <div className="col-md-4 mb-3">
              <h4 className="mb-3">Quick Links</h4>
              <ul className="list-unstyled">
                <li><Link to="/" className="text-white">Home</Link></li>
                <li><Link to="/products" className="text-white">Products</Link></li>
                <li><Link to="/about" className="text-white">About Us</Link></li>
              </ul>
            </div>
            <div className="col-md-4 mb-3">
              <h4>Follow Us</h4>
              <a href="https://www.facebook.com" className="text-white">Facebook</a><br />
              <a href="https://www.instagram.com" className="text-white">Instagram</a><br />
              <a href="https://www.linkedln.com" className="text-white">Linkedln</a><br />

            </div>
          </div>
          <div className="text-center mt-3">
            <p>&copy; {new Date().getFullYear()} Grosellt. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;




