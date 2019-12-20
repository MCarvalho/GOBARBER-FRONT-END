import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  /** Mod pessoais
  height: 100ch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: scroll;
  */

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        font-weight: bold;
        color: rgba(255, 255, 255, 0.5);
      }
    }

    span {
      color: #ff7c9b;
      align-self: flex-end;
      margin: 0 0 10px;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.3);
      margin: 10px 0 20px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #3f5efb;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;

      &:hover {
        background: ${darken(0.03, '#3f5efb')};
        transform: translateY(-2px);
        transition: all 0.11s;
      }
    }
  }

  > button {
    width: 100%;
    margin: 10px 0 0;
    height: 44px;
    background: #f64c75;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;

    &:hover {
      background: ${darken(0.08, '#f64c75')};
      transform: translateY(-2px);
      transition: all 0.11s;
    }
  }
`;
