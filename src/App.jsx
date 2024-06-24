/* eslint-disable no-unused-vars */
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { Auth } from './router/auth/auth';
import { Home } from './router/home/home';
import { Doces } from './router/doces/doces';
import { Bolos } from './router/bolos/bolos';
import { Salgados } from './router/salgados/salgados';
import { FacaSuaFesta } from './router/faca-sua-festa/faca-sua-festa';
import { Navigation } from './router/navigation/navigation';
import { Shop } from './router/shop/shop';
import CheckoutPage from './components/checkout-page/CheckoutPage';
import { CartProvider } from './components/cart-context/CartContext';

export function App() {
  return (
    <CartProvider>
      <Routes>
          <Route path='/' element={<Navigation/>}>
          <Route index element={<Home/>} />
          <Route path="/doces" element={<Doces />} />
          <Route path="/bolos" element={<Bolos />} />
          <Route path="/salgados" element={<Salgados />} />
          <Route path="/faca-sua-festa" element={<FacaSuaFesta />} />
          <Route path='auth' element={<Auth />} />
          <Route path='checkout' element={<CheckoutPage />} />
          <Route path='shop/*' element={<Shop/>} />
        </Route>
      </Routes>
    </CartProvider>
  );
}
