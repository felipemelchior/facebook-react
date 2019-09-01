import React from 'react';

import facebookLogo from '../../assets/facebook.svg';

import { Container, Nav } from './styles';

export default function Header() {
  return (
    <Container>
      <Nav>
        <img src={facebookLogo} alt="Facebook Logo"></img>
        <a href="https://facebook.com">Meu perfil</a> 
      </Nav>
    </Container>
  );
}
