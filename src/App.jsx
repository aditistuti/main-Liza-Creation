import React,{useState} from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Wishlist from './pages/Wishlist';
import Contact from './pages/Contact';
import CartPage from './pages/Cart';
import { CartProvider } from './utlis/Cartcontext';
import Auth from './pages/Auth';
import ProductDetail from './components/ProductDetail';

function App() {
  const [wishlist, setWishlist] = useState([]);
  const [user, setUser] = useState(null); 

  return (
    <CartProvider>
      <Router>
        <Header user={user} /> 
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/' element={<Auth setUser={setUser} />} />
          <Route path='/products' element={<Products wishlist={wishlist} setWishlist={setWishlist} />} />
          <Route path='/wishlist' element={<Wishlist wishlist={wishlist} setWishlist={setWishlist} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/auth" element={<Auth setUser={setUser} />} />
          <Route path="/product/:id" element={<ProductDetail/>} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;