import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Headroom from 'react-headroom';

const Wrapper = styled.div`
  min-height: 5vh;
  margin: auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 100%;

  @media screen and (max-width: 1311px) {
    text-align: center;
    .logo {
      padding: 2rem;
    }
    html {
      font-size: 45%;
    }
  }

  a {
    padding: 10px 20px;
    color: white;
    text-decoration: none;

    cursor: pointer;
    font-weight: bolder;
  }

  .logo {
    font-size: 1.2rem;
    letter-spacing: 2px;
    flex: 2 1 40rem;
  }

  .right {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex: 1 1 40rem;
    font-weight: 700;

    .login {
      transition: 0.5s;
      &:hover {
        box-shadow: 0 -20px 0 0 rgba(76, 110, 151, 1) inset;
      }
    }
    .logout {
      transition: 0.5s;
      &:hover {
        box-shadow: 0 -20px 0 0 rgba(246, 114, 127, 1) inset;
      }
    }

    .register {
      transition: 0.5s;
      &:hover {
        box-shadow: 0 -20px 0 0 rgba(69, 66, 105, 1) inset;
      }
    }

    .about {
      transition: 0.5s;
      &:hover {
        box-shadow: 0 -20px 0 0 rgba(192, 108, 132, 1) inset;
      }
    }
  }
`;

const Header = ({ user, onLogout }) => {
  return (
    <div>
      <Headroom
        style={{
          background: '#00828C',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.08)',
          minHeight: '4rem',
        }}
      >
        {/* <HeaderBlock style={{ zIndex: 3 }}> */}
        <Wrapper>
          <Link className="logo" id="logo-font" to="/">
            Today, Mood
          </Link>
          <nav className="right">
            {user ? (
              <li>
                <Link to={`/?username=${user.username}`}>{user.username}</Link>
              </li>
            ) : (
              <li>
                <Link to="/about" className="about">
                  About
                </Link>
              </li>
            )}
            {user ? (
              <li>
                <Link to="/" onClick={onLogout} className="logout">
                  로그아웃
                </Link>
              </li>
            ) : (
              <li>
                <Link className="login" to="/login">
                  로그인
                </Link>
              </li>
            )}
            {!user && (
              <li>
                <Link className="register" to="/register">
                  회원 가입
                </Link>
              </li>
            )}
          </nav>
        </Wrapper>
      </Headroom>
    </div>
  );
};

export default Header;
