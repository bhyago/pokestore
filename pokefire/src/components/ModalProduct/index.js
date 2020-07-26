import React from 'react';
import {
  Container,
  ProductArea,
  ProductPhoto,
  ProductInfoArea,
  ProductDetails,
  ProductQuantityArea,
  ProductButtons } from './styles';

export default function ModalProduct () {
  return (
    <Container>
      <ProductArea>
        <ProductPhoto src="" />
        <ProductInfoArea>
          <ProductDetails>
            111
          </ProductDetails>
          <ProductQuantityArea>
                  222
          </ProductQuantityArea>
        </ProductInfoArea>
      </ProductArea>

      <ProductButtons>

      </ProductButtons>
    </Container>
  )
}
