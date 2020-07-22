import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeadContainer from '../containers/common/HeaderContainer';
import LandingContainer from '../containers/about/LandingContainer';

const AboutPage = () => {
  return (
    <div>
      <Helmet>
        <title>About - Today, mood</title>
      </Helmet>
      <HeadContainer />
      <LandingContainer />
    </div>
  );
};

export default AboutPage;
