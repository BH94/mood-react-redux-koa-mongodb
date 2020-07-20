import React from 'react';
import styled from 'styled-components';

import Button from '../common/Button';
import dairyImg from '../../img/dairy.jpg';

const LandingBlock = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), transparent),
    url(${dairyImg});
  min-height: 95vh;
  background-size: cover;
  background-position: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  .landing-head {
    width: 90%;
    h1,
    h3 {
      color: white;
      background: linear-gradient(to right, #ffffff 46%, #000000 48%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    @media screen and (max-width: 768px) {
      h1 {
        font-size: 1.8rem;
      }
      h3 {
        font-size: 1.4rem;
      }
    }

    @media screen and (max-width: 425px) {
      h1 {
        font-size: 1.4rem;
      }
      h3 {
        font-size: 1.1rem;
      }
    }
  }
`;

const JoinButton = styled(Button)`
  border: 4px solid rgb(0, 130, 140);
`;

const LandingSection = ({ user }) => {
  return (
    <LandingBlock>
      <div className="landing-head">
        <h1>The Easiest Way to Record Today's Mood</h1>
        <h3>잊어버리고 싶지 않은 순간을 붙잡아 두는 습관</h3>
      </div>
      {user ? (
        <JoinButton to="/write">New Mood</JoinButton>
      ) : (
        <JoinButton to="/register">JOIN US</JoinButton>
      )}
    </LandingBlock>
  );
};

export default LandingSection;
