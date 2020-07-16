import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const buttonStyle = css`
  background: none;
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  padding: 1rem 4rem;
  display: block;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  transition: 0.5s;
  margin-top: 1rem;
  text-decoration: none;
  &:hover {
    /* border: none; */
    color: #fff;
    background: #4c6e97;
  }
  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 425px) {
    font-size: 1rem;
    padding: 0.5rem 2rem;
  }
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;

const Button = (props) => {
  return props.to ? <StyledLink {...props} /> : <StyledButton {...props} />;
};

export default Button;
