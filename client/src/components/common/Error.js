import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const ErrorBlock = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background: rgba(10, 10, 10, 0.9);

  @media screen and (max-width: 425px) {
    h1 {
      font-size: 90%;
    }
  }
`;

const StyleButton = styled(Button)`
  border: 4px solid rgb(0, 130, 140);
`;

const Error = ({ errorMsg }) => {
  return (
    <ErrorBlock>
      <h1>{errorMsg}</h1>
      <StyleButton to="/">HOME</StyleButton>
    </ErrorBlock>
  );
};

export default Error;
