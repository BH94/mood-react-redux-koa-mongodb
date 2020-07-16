import React from 'react';
import styled from 'styled-components';

const BackgroundDiv = styled.div`
  background: ${(props) => props.color || 'rgba(10,10,10,0.9)'};

  min-height: ${(props) => props.mh || '100vh'};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Background = ({ children, color }) => {
  return <BackgroundDiv color={color}>{children}</BackgroundDiv>;
};

export default Background;
