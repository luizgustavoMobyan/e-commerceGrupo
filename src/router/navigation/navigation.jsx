/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import { LogoIcon } from '../../components/logo-icon/logo-icon'
import { CartIcon } from '../../components/cart-icon/cart-icon'
import './navigation.scss'
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export function Navigation() {
  return (
    <>
      <div className="navigation">
        <div className="logo-container">
          <NavLink to="/">
          <LogoIcon />
          </NavLink>
        </div>
        <div className="nav-links-container">
        <NavLink className="nav-link" to="/doces">Doces</NavLink>
        <NavLink className="nav-link" to="/bolos">Bolos</NavLink>
        <NavLink className="nav-link" to="/salgados">Salgados</NavLink>
        <NavLink className="nav-link" to="/faca-sua-festa">Faça sua Festa</NavLink>
        </div>
        <NavLink className="nav-link-login" to="/auth">
        <a className="nav-link-login">Minha Conta</a>
        </NavLink>
        <NavLink className="nav-link" to="/checkout">
        <CartIcon className="nav-cart" />
        </NavLink>
      </div>
      <Outlet/>
    </>
  );
}


