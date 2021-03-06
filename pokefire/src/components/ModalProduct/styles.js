import styled from 'styled-components';

export const Container = styled.div`
    width: 740px;
    padding: 10px;
`;

export const ProductArea = styled.div`
  display: flex;

  height: 200px;
`;

export const ProductPhoto = styled.img`
  width: 310px;
`;

export const ProductInfoArea = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductDetails = styled.div`
  height: 50px;
  background-color: #ff0000;
`;

export const ProductQuantityArea = styled.div`
  height: 50px;
  background-color: #0000ff;
`;

export const ProductButtons = styled.div`
  height: 50px;
  background-color: #00FF00;

`;
