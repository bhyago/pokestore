import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* align-items: center; */
  margin: 50px 0;
`;
export const Form = styled.div`
  margin-top: 20px;
  max-width: 1020px;

  display: flex;

  input {
    flex:1;
    height: 50px;
    padding: 0 18px;
    border: 0;
    border-radius: 10px 0 0 10px;
    color: #3a3a3a;

    &::placeholder {
      color: #E05151;
    }
  }

  button {
    width: 180px;
    height: 50px;
    background: #E05151;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.2, '#E05151')}
    }
  }
`;
