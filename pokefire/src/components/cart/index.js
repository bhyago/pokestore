import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { CartArea, CartHeader, CartText, CartBody } from './styles';

export default function Cart () {
  return (
    <CartArea>
      <CartHeader>
        <MdAddShoppingCart  size={22} color="#fff"/>
        <CartText>Meu Carrinho (x)</CartText>
      </CartHeader>
      <CartBody>

      </CartBody>
    </CartArea>
  )
}

