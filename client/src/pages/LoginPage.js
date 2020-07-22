import React from 'react';
import { Helmet } from 'react-helmet-async';
import AuthTemplate from '../components/auth/AuthTemplate';
import LoginForm from '../containers/auth/LoginForm';
const LoginPage = () => {
  return (
    <AuthTemplate>
      <Helmet>
        <title>Sign In - Today, mood</title>
      </Helmet>
      <LoginForm />
    </AuthTemplate>
  );
};

export default LoginPage;
