import React, { useState } from 'react';
import CategoryNav from '../components/CategoryNav';
import { useCart } from '../context/CartContext';
import './Card.css';
import Apple from '../assets/apple.jpg';
import Banana from '../assets/banana.jpg';
import Mango from '../assets/mango.jpg';
import Orange from '../assets/oranges.jpg';
import Grapes from '../assets/grapes.jpg';

const fruitsList = [
  { id: 1, name: 'Apple', price: 50, image: Apple },
  { id: 2, name: 'Banana', price: 20, image: Banana },
  { id: 3, name: 'Mango', price: 60, image: Mango },
  { id: 4, name: 'Orange', price: 30, image: Orange },
  { id: 5, name: 'Grapes', price: 40, image: Grapes },
];

const Fruits = () => {
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFruits = fruitsList.filter((fruit) =>
    fruit.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <CategoryNav searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="container mt-4">
        <h2 className="text-center mb-4">Fruits</h2>
        <div className="row">
          {filteredFruits.length > 0 ? (
            filteredFruits.map((fruit) => (
              <div className="col-md-4 col-sm-6 mb-4" key={fruit.id}>
                <div className="card h-100 shadow-sm">
                  <img src={fruit.image} className="card-img-top" alt={fruit.name} />
                  <div className="card-body">
                    <h5 className="card-title">{fruit.name}</h5>
                    <p className="card-text">Price: ₹{fruit.price}</p>
                    <button className="btn btn-success w-100" onClick={() => addToCart(fruit)}>Add to Cart</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">No fruits found.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Fruits;
