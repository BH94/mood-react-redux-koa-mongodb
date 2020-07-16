import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const SubInfoBlock = styled.div`
  .user-block {
    /* background: #28594b; */
    /* border-radius: 5px; */
    background: rgba(255, 255, 255, 0.7);

    text-align: center;
    padding: 3px 6px;

    a {
      color: black;
      text-decoration: none;
    }
  }

  ${(props) =>
    props.hasMarginTop &&
    css`
      margin-top: 1rem;
    `}

  span + span:before {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }

  span {
    margin-right: 1rem;
    font-weight: 600;
  }
`;

const SubInfo = ({ username, publishedDate, hasMarginTop }) => {
  return (
    <SubInfoBlock hasMarginTop={hasMarginTop}>
      <span>
        <b className="user-block">
          <Link to={`/?username=${username}`}>{username}</Link>
        </b>
      </span>
      <span>{new Date(publishedDate).toLocaleDateString()}</span>
    </SubInfoBlock>
  );
};

export default SubInfo;
