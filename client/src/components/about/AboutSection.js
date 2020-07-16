import React from 'react';
import styled from 'styled-components';

// import mountainImg from '../../img/contact-mountain.png';
// import CloudImg from '../../img/cloud.png';
// import dairyImg from '../../img/dairy.jpg';

const AboutBlock = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), transparent),
    url(${dairyImg});
  min-height: 95vh;
  background-size: cover;
  background-position-y: center;
  color: white;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  .about-head {
    width: 90%;
    margin: auto;
    h1 {
      padding: 0.5rem 0rem;
      color: white;
    }
    h3 {
      padding: 0.5rem 0rem;
      color: white;
    }
    .cloud {
      position: absolute;
      top: 0%;
      right: 0%;
      pointer-events: none;
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

    .moving-cloud-1 {
      animation: cloudAnimation 5s infinite alternate ease-in-out;
    }

    .moving-cloud-2 {
      animation: cloudAnimation 5.2s infinite alternate ease-in-out;
      top: 20%;
      z-index: -1;
      opacity: 0.7;
    }

    @keyframes cloudAnimation {
      from {
        transform: translate(10%, -10%);
      }
      to {
        transform: translate(0%, 0%);
      }
    }

    @media screen and (max-width: 1311px) {
      text-align: center;
      .moving-cloud-1 {
        z-index: -1;
      }

      .moving-cloud-2 {
        z-index: -2;
      }
    }
  }
`;

const AboutSection = () => {
  return (
    <AboutBlock>
      <div className="about-head">
        <h1>오늘을 적고, 내일을 설계하는 것</h1>
        <h3>기록을 남긴다는 건, 내일을 있게 하는 것</h3>
        <img src={CloudImg} className="moving-cloud-1 cloud" alt="CloudImg" />
        <img src={CloudImg} className="moving-cloud-2 cloud" alt="CloudImg" />
      </div>
    </AboutBlock>
  );
};

export default AboutSection;
