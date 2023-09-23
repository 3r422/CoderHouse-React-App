import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Carrito from './components/Carrito';
import Checkout from './components/Checkout';



function App() {
  return (
    < CartProvider>
      < BrowserRouter>
        < NavBar bg ="dark" data-bs-theme="dark" />
        <Routes>
          <Route path="/" element={< ItemListContainer />} />
          <Route path="/item/:id" element={< ItemDetailContainer />} />
          <Route path="/category/:id" element={< ItemListContainer />} />
          <Route path="/carrito" element={< Carrito/>} />
          <Route path="/checkout" element={< Checkout />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
