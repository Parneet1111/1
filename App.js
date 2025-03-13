import './App.css';
import Navbar from './Components/Navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';  // Ensure Shop component exists
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product'; // Ensure Product component exists
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} /> 
          <Route path='/mens' element={<ShopCategory category="men" />} />
          <Route path='/womens' element={<ShopCategory category="women" />} />
          <Route path='/product/:productId' element={<Product />} /> {/* Fixed Dynamic Route */}
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
