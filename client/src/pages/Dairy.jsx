import React, { useState } from 'react';
import CategoryNav from '../components/CategoryNav';
import { useCart } from '../context/CartContext';
import './Card.css';
import Milk from '../assets/milk.jpg';
import Cheese from '../assets/cheese.jpg';
import Butter from '../assets/butter.jpg';
import Yogurt from '../assets/yougurt.jpg';
import Paneer from '../assets/panner.jpg';

const dairyList = [
  { id: 1, name: 'Milk', price: 25, image: Milk },
  { id: 2, name: 'Cheese', price: 80, image: Cheese },
  { id: 3, name: 'Butter', price: 70, image: Butter },
  { id: 4, name: 'Yogurt', price: 30, image: Yogurt },
  { id: 5, name: 'Paneer', price: 90, image: Paneer },
];

const Dairy = () => {
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDairy = dairyList.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <CategoryNav searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="container mt-4">
        <h2 className="text-center mb-4">Dairy Products</h2>
        <div className="row">
          {filteredDairy.length > 0 ? (
            filteredDairy.map((item) => (
              <div className="col-md-4 col-sm-6 mb-4" key={item.id}>
                <div className="card h-100 shadow-sm">
                  <img src={item.image} className="card-img-top" alt={item.name} />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">Price: ₹{item.price}</p>
                    <button className="btn btn-success w-100" onClick={() => addToCart(item)}>Add to Cart</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">No dairy products found.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dairy;
