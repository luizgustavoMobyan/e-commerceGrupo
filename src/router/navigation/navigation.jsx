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
          <span className="logo-text-left">ES</span>
          <NavLink to="/">
          <LogoIcon />
          </NavLink>
          <span className="logo-text-right">ROSA</span>
        </div>
        <div className="nav-links-container">
          <a className="nav-link">DOCES</a>
          <a className="nav-link">BOLOS</a>
          <a className="nav-link">SALGADOS</a>
          <a className="nav-link">FAÇA SUA FESTA</a>
        </div>
        <NavLink className="nav-link" to="/auth">
        <a className="nav-link">LOGIN</a>
        </NavLink>
        <CartIcon className="nav-cart" />
      </div>
      <Outlet/>
    </>
  );
}