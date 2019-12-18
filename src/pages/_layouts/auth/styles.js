import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: rgb(226, 202, 250);
  background: linear-gradient(
    180deg,
    rgba(253, 202, 250, 1) 0%,
    rgba(103, 0, 184, 1) 100%
  );

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: scroll;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

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

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.6;
      font-weight: bold;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
