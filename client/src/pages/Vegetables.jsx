import React, { useState } from 'react';
import CategoryNav from '../components/CategoryNav';
import { useCart } from '../context/CartContext';
import './Card.css';

import Carrot from '../assets/carrot.jpg';
import Broccoli from '../assets/brocolli.jpg';
import Spinach from '../assets/spinach.jpg';
import Potato from '../assets/potato.jpg';
import Onion from '../assets/Onions.jpg';

const vegetablesList = [
  { id: 1, name: 'Carrot', price: 30, image: Carrot },
  { id: 2, name: 'Broccoli', price: 40, image: Broccoli },
  { id: 3, name: 'Spinach', price: 20, image: Spinach },
  { id: 4, name: 'Potato', price: 25, image: Potato },
  { id: 5, name: 'Onion', price: 22, image: Onion},
];

const Vegetables = () => {
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVeggies = vegetablesList.filter((veg) =>
    veg.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <CategoryNav searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="container mt-4">
        <h2 className="text-center mb-4">Vegetables</h2>
        <div className="row">
          {filteredVeggies.length > 0 ? (
            filteredVeggies.map((veg) => (
              <div className="col-md-4 col-sm-6 mb-4" key={veg.id}>
                <div className="card h-100 shadow-sm">
                  <img src={veg.image} className="card-img-top" alt={veg.name} />
                  <div className="card-body">
                    <h5 className="card-title">{veg.name}</h5>
                    <p className="card-text">Price: ₹{veg.price}</p>
                    <button
  className="btn btn-success w-100"
  onClick={() => addToCart(veg)}
>
  Add to Cart
</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">No vegetables found.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Vegetables;

