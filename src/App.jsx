/* eslint-disable no-unused-vars */
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Auth } from './router/auth/auth';
import { Home } from './router/home/home';
import { Navigation } from './router/navigation/navigation';
import { Shop } from './router/shop/shop';
import { CartProvider } from './components/cart-context/CartContext';

export function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route index element={<Home/>} />
          <Route path='auth' element={<Auth />} />
          <Route path='checkout' element={{}}/>
          <Route path='shop/*' element={<Shop/>} />
        </Route>
      </Routes>
    </CartProvider>
  );
}