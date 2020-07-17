import styled from 'styled-components';

export const CartArea = styled.div`
  background-color: #E05151;
  border-radius: 10px 10px 0 0;
  position: fixed;
  bottom: 0;
  right: 50px;
`;

export const CartHeader = styled.div`
  width: 277px;
  height: 46px;
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    margin-right: 10px;
    margin-left: 10px;
  }
`;

export const CartText = styled.div`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

export const CartBody = styled.div``;
