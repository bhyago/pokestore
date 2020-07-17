import styled from 'styled-components';
import { shade } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  list-style:none;

  li {
    display: flex;
    flex-direction: column;

    background: #fff;
    border-radius: 10px;
    padding: 20px;

    img {
      align-self: center;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    >span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      background: #E05151;
      color: #fff;
      border:0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${shade(0.2, '#E05151')}
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0,0,0,0.1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
        font-size: 14px;
      }
    }
  }
`;


export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  button + button {
    margin-left: 50px;
  }

  button {
    border: 0;

    img {
      svg:hover circle {
      fill: ${shade(0.2, '#E05159')}
    }
  }
  }






`;

