import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderPage = () => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      const res = await axios.get('http://localhost:3001/api/orders');
      if (res.data.length > 0) setOrder(res.data[0]);
    };
    fetchOrder();
  }, []);

  if (!order) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h2>Order Summary</h2>
      <ul className="list-group">
        {order.items.map(item => (
          <li key={item.id} className="list-group-item d-flex justify-content-between">
            {item.name} x {item.quantity}
            <span>₹{item.price * item.quantity}</span>
          </li>
        ))}
      </ul>
      <hr />
      <p><strong>Total:</strong> ₹{order.total.toFixed(2)}</p>
      <p><strong>GST:</strong> ₹{order.gst.toFixed(2)}</p>
      <h4><strong>Final Total:</strong> ₹{order.finalTotal.toFixed(2)}</h4>
    </div>
  );
};

export default OrderPage;
