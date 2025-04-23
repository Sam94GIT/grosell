import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/Products.css';
import { useCart } from '../context/CartContext';
import Ginger from '../assets/ginger.jpg';
import Muskmelon from '../assets/muskmelon.jpg';
import Coriander from '../assets/coriander.jpg';
import Pineapple from '../assets/pineapple.jpg';
import Mango from '../assets/mango.jpg';
import Spinach from '../assets/spinach.jpg';
import Tomato from '../assets/tomatoes.jpg';
import Banana from '../assets/banana.jpg';
import Apple from '../assets/apple.jpg';
import Onion from '../assets/Onions.jpg';
import Milk from '../assets/milk.jpg';
import Panner from '../assets/panner.jpg';
import Cheese from '../assets/cheese.jpg';
import Butter from '../assets/butter.jpg';

const products = [
  {
    id: 1,
    name: 'Muskmelon',
    price: 235,
    unit: '600-800 g',
    image: Muskmelon,
    category: 'Fruits',
  },
  {
    id: 2,
    name: 'Mango Banganapalli',
    price: 161,
    unit: '1 kg',
    image: Mango,
    category: 'Fruits',
  },
  {
    id: 3,
    name: 'Gourmet Garden Organic Assorted Ginger',
    price: 114,
    unit: '100 g',
    image: Ginger,
    category: 'Vegetables',
  },
  {
    id: 4,
    name: 'Coriander leaves with roots',
    price: 111,
    unit: '100 g',
    image: Coriander,
    category: 'Vegetables',
  },
  {
    id: 5,
    name: 'Pluckk Pineapple Chunks',
    price: 269,
    unit: '200 g',
    image: Pineapple,
    category: 'Fruits',
  },
  {
    id: 6,
    name: 'Fresh Banana (Robusta)',
    price: 55,
    unit: '1 dozen',
    image: Banana,
    category: 'Fruits',
  },
  {
    id: 7,
    name: 'Organic Spinach Leaves',
    price: 40,
    unit: '250 g',
    image: Spinach,
    category: 'Vegetables',
  },
  {
    id: 8,
    name: 'Fresh Red Tomatoes',
    price: 34,
    unit: '1 kg',
    image: Tomato,
    category: 'Vegetables',
  },
  {
    id: 9,
    name: 'Royal Gala Apple',
    price: 149,
    unit: '4 pcs',
    image: Apple,
    category: 'Fruits',
  },
  {
    id: 10,
    name: 'Onion (Nashik)',
    price: 29,
    unit: '1 kg',
    image: Onion,
    category: 'Vegetables',
  },
  // Example Dairy (you can add more)
  {
    id: 11,
    name: 'Fresh Cow Milk',
    price: 65,
    unit: '1 litre',
    image: Milk, // Replace with actual dairy image
    category: 'Dairy',
  },
  {
    id: 12,
    name: 'Paneer',
    price: 130,
    unit: '200 g',
    image: Panner, // Replace with actual paneer image
    category: 'Dairy',
  },
  {
    id: 13,
    name: 'Cheese',
    price: 200,
    unit: '200 g',
    image: Cheese, // Replace with actual paneer image
    category: 'Dairy',
  },
  {
    id: 14,
    name: 'Butter',
    price: 210,
    unit: '200 g',
    image: Butter, // Replace with actual paneer image
    category: 'Dairy',
  },
];

const renderSection = (title, category) => {
  const { addToCart } = useCart();
  const items = products.filter(product => product.category === category);
  if (items.length === 0) return null;

  return (
    <section className="product-section">
      <h2 className="section-title">{title}</h2>
      <div className="products-container">
        {items.map((product) => (
          <div className="product-card" key={product.id}>
            <img 
              src={product.image} 
              alt={product.name} 
              className="product-image"
            />
            <div className="product-info">
              <h5 className="product-name">{product.name}</h5>
              <p className="product-price">₹{product.price}</p>
              <p className="product-unit">{product.unit}</p>
            </div>
            <a onClick={() => addToCart(product)} className="add-to-cart-button">Add to Cart</a>
          </div>
        ))}
      </div>
    </section>
  );
};

const FruitsAndVegetablesPage = () => {
  return (
    <div>
      {renderSection('Fresh Fruits', 'Fruits')}
      {renderSection('Fresh Vegetables', 'Vegetables')}
      {renderSection('Dairy Products', 'Dairy')}
    </div>
  );
};

export default FruitsAndVegetablesPage;
