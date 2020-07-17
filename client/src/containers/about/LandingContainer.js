import React from 'react';
import { useSelector } from 'react-redux';
import LandingSection from '../../components/about/LandingSection';

const LandingContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  return <LandingSection user={user} />;
};

export default LandingContainer;
