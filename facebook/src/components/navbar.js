import React from 'react';

import Logo from '../assets/logo.svg';
import Account from '../assets/account.png';

import './navbar.css';

export default function components() {
  return (
    <div className="container">
      <div className="box">
        <img src={Logo} alt="Facebook" />
        <div>
          <a href='https://facebook.com'>Meu Perfil</a>
          <img src={Account} alt="Minha conta" />
        </div>
      </div>
    </div>
  );
}
