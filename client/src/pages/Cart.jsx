import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CartPage = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const gst = total * 0.18;
  const finalTotal = total + gst;

  const handleOrder = async () => {
    await axios.post('http://localhost:3001/api/orders', {
      items: cartItems,
      total,
      gst,
      finalTotal
    });
    clearCart();
    navigate('/order');
  };

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      <ul className="list-group">
        {cartItems.map(item => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
            {item.name} x {item.quantity}
            <span>₹{item.price * item.quantity}</span>
          </li>
        ))}
      </ul>
      <hr />
      <p><strong>Subtotal:</strong> ₹{total.toFixed(2)}</p>
      <p><strong>GST (18%):</strong> ₹{gst.toFixed(2)}</p>
      <h4><strong>Total:</strong> ₹{finalTotal.toFixed(2)}</h4>
      <button onClick={handleOrder} className="btn btn-success mt-3">Make Order</button>
    </div>
  );
};

export default CartPage;
