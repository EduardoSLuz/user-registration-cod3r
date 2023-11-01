import './Logo.css';
import logoImg from '../../assets/imgs/logo.png';
import React from 'react';

const Logo = props => (
  <aside className="logo">
    <a href="/" className="logo">
      <img src={logoImg} alt="logo" />
    </a>
  </aside>
);

export default Logo;
