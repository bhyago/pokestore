import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import pokemon from '../../assets/images/poke.png'
import { ProductList, Button } from './styles';
import rigthButton from '../../assets/images/RightButton.svg';
import leftButton from '../../assets/images/LeftButton.svg';

function Home() {
  return (
    <>
  <ProductList>
    <li>
      <img src={pokemon} alt="pokemon"/>

    <strong>Nome de pokemon</strong>
    <span>49,90</span>

    <button type="button">
      <div>
        <MdAddShoppingCart size={16} color="#FFF" /> 3
      </div>

      <span>ADICIONAR AO CARRINHO</span>
    </button>
    </li>
    <li>
      <img src={pokemon} alt="pokemon"/>

    <strong>Nome de pokemon</strong>
    <span>49,90</span>

    <button type="button">
      <div>
        <MdAddShoppingCart size={16} color="#FFF" /> 3
      </div>

      <span>ADICIONAR AO CARRINHO</span>
    </button>
    </li>
    <li>
      <img src={pokemon} alt="pokemon"/>

    <strong>Nome de pokemon</strong>
    <span>49,90</span>

    <button type="button">
      <div>
        <MdAddShoppingCart size={16} color="#FFF" /> 3
      </div>

      <span>ADICIONAR AO CARRINHO</span>
    </button>
    </li>
    <li>
      <img src={pokemon} alt="pokemon"/>

    <strong>Nome de pokemon</strong>
    <span>49,90</span>

    <button type="button">
      <div>
        <MdAddShoppingCart size={16} color="#FFF" /> 3
      </div>

      <span>ADICIONAR AO CARRINHO</span>
    </button>
    </li>
    <li>
      <img src={pokemon} alt="pokemon"/>

    <strong>Nome de pokemon</strong>
    <span>49,90</span>

    <button type="button">
      <div>
        <MdAddShoppingCart size={16} color="#FFF" /> 3
      </div>

      <span>ADICIONAR AO CARRINHO</span>
    </button>
    </li>
    <li>
      <img src={pokemon} alt="pokemon"/>

    <strong>Nome de pokemon</strong>
    <span>49,90</span>

    <button type="button">
      <div>
        <MdAddShoppingCart size={16} color="#FFF" /> 3
      </div>

      <span>ADICIONAR AO CARRINHO</span>
    </button>
    </li>
  </ProductList>

  <Button>
    <button type="button">
      <img src={leftButton} alt=""/>
    </button>
    <button type="button">
      <img src={rigthButton} alt=""/>
    </button>

  </Button>

  </>
  );
}

export default Home;
