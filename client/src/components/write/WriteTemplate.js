import React from 'react';
import styled from 'styled-components';
import writePageBackgroundImg from '../../img/writePageBackground.jpg';

const WriteTemplateBlock = styled.div`
  height: 100%;
  background: rgba(10, 10, 10, 0.9);
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${writePageBackgroundImg});
`;

const InputBlock = styled.div`
  opacity: 0.9;
  width: 60%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const WriteTemplate = ({ children }) => {
  return (
    <WriteTemplateBlock>
      <InputBlock>{children}</InputBlock>
    </WriteTemplateBlock>
  );
};

export default WriteTemplate;
