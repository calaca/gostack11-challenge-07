import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <ul>
          <Link
            className={useLocation().pathname === '/' ? 'active' : ''}
            to="/"
          >
            Listagem
          </Link>
          <Link
            className={useLocation().pathname === '/import' ? 'active' : ''}
            to="/import"
          >
            Importar
          </Link>
        </ul>
      </nav>
    </header>
  </Container>
);

export default Header;
