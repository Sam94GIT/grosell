import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Homepage from './Homepage';
import  FruitsAndVegetablesPage  from './pages/Products';
import Vegetables from './pages/Vegetables';
import Fruits from './pages/Fruits';
import Dairy from './pages/Dairy';
import OrderPage from './pages/Order';
import CartPage from './pages/Cart';
import { CartProvider } from './context/CartContext';
import UserProfile from './Userprofile';


function App() {
  return (
    <CartProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<FruitsAndVegetablesPage />} />
        <Route path="/vegetables" element={<Vegetables />} />
        <Route path="/fruits" element={<Fruits />} />
        <Route path="/dairy" element={<Dairy />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/user-profile" element={<UserProfile />} />

      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;

