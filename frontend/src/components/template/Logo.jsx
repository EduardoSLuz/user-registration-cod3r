import './Logo.css';
import logoImg from '../../assets/imgs/logo.png';
import React from 'react';
import { Link } from 'react-router-dom';

export default props => (
  <aside className="logo">
    <Link to="/" className="logo">
      <img src={logoImg} alt="logo" />
    </Link>
  </aside>
);
