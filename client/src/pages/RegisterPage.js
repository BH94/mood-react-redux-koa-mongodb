import React from 'react';
import { Helmet } from 'react-helmet-async';
import AuthTemplate from '../components/auth/AuthTemplate';
// import AuthForm from "../components/auth/AuthForm";
import RegisterForm from '../containers/auth/RegisterForm';
const RegisterPage = () => {
  return (
    <AuthTemplate>
      <Helmet>
        <title>Sign Up - Today, mood</title>
      </Helmet>
      <RegisterForm />
    </AuthTemplate>
  );
};

export default RegisterPage;
