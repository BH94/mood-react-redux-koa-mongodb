import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const AuthFormBlock = styled.div`
  transition: 1s;

  .logo {
    /* margin-bottom: 10rem; */
    font-size: 2.8rem;
    text-decoration: none;
    color: #4c6e97;
    /* color: #131c27; */
  }

  h2 {
    margin: 0;
    color: #fff;
    font-size: 1.8rem;
    margin-bottom: 1rem;
    letter-spacing: 0.2rem;
  }

  form {
    border: none;
    padding: 20px 10px;
  }
`;

const StyledInput = styled.input`
  border: none;
  background: none;
  outline: none;
  font-size: 1.2rem;
  color: #fff;
  width: 100%;
  padding: 1rem;
  border-bottom: 3px solid #d9d9d9;
  & + & {
    margin-top: 2rem;
  }

  &:focus,
  &:hover {
    border-bottom: 3px solid #4c6e97;
  }

  @media screen and (max-width: 1024px) {
    font-size: 1rem;
  }
`;

const Footer = styled.div`
  margin: 1rem 0;
  text-align: right;

  .a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    &:hover {
      color: #4c6e97;
    }
  }
`;

const LoginButton = styled(Button)`
  border: 2px solid #4c6e97;
`;

const ErrorBox = styled.div`
  text-align: center;
  color: red;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const textMap = {
  login: '로그인',
  register: '회원가입',
};

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <Link to="/" className="logo" id="logo-font">
        Today, Mood
      </Link>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="ID"
          onChange={onChange}
          value={form.username}
        />
        <StyledInput
          type="password"
          autoComplete="password"
          name="password"
          placeholder="Password"
          onChange={onChange}
          value={form.password}
        />
        {type === 'register' && (
          <StyledInput
            type="password"
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="re-Password"
            onChange={onChange}
            value={form.passwordConfirm}
          />
        )}
        <LoginButton fullWidth>{text}</LoginButton>
      </form>
      {error && <ErrorBox>{error}</ErrorBox>}
      <Footer>
        {type === 'login' ? (
          <Link to="/register" className="a">
            회원가입
          </Link>
        ) : (
          <Link to="/login" className="a">
            로그인
          </Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;
