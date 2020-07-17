import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Form } from './styles';

import logo from '../../assets/images/logoFire.svg';

export default function Header({ search, onSearch }) {

  const handleChange = (e) => {
    onSearch( e.target.value);
  }

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <Form action="">
        <input
         placeholder="Digite aqui"
         type="text"
         value={search}
         onChange={handleChange}
         />
        <button type="submit">Pesquisar</button>
      </Form>
    </Container>
  );
}
