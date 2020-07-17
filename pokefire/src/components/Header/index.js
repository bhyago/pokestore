import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Form } from './styles';

import logo from '../../assets/images/logoFire.svg';

export default function Header() {

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <Form action="">
        <input placeholder="Digite aqui" type="search" name="" id=""/>
        <button type="submit">Pesquisar</button>
      </Form>
    </Container>
  );
}
