import React from 'react';
import styled from 'styled-components';
import buildingImg from '../../img/new-york-page.png';

const TemplateBlock = styled.div`
  height: 100vh;
  background-image: linear-gradient(rgba(250, 203, 75, 0.5), transparent),
    url(${buildingImg});
  background-position: center;
  background-size: cover;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormBox = styled.div`
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 45vw;
  background: black;
  border-radius: 2px;
  opacity: 0.9;
  text-align: center;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    width: 90%;
  }
`;

const AuthTemplate = ({ children }) => {
  return (
    <TemplateBlock>
      <FormBox>{children}</FormBox>
    </TemplateBlock>
  );
};

export default AuthTemplate;
