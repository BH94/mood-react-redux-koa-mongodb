import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import qs from 'qs';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';

const PaginationBlock = styled.div`
  width: 320px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;

  .right {
    &:disabled {
      cursor: not-allowed;
      color: gray;

      &:hover {
        animation: none;
      }
    }

    &:hover {
      animation: arrowRightAnimation 0.5s infinite alternate ease-out;
    }
  }

  .left {
    &:disabled {
      cursor: not-allowed;
      color: gray;

      &:hover {
        animation: none;
      }
    }

    &:hover {
      animation: arrowLeftAnimation 0.5s infinite alternate ease-out;
    }

    @keyframes arrowLeftAnimation {
      from {
        transform: translate(0%, 0%);
      }
      to {
        transform: translate(15%, 0%);
      }
    }

    @keyframes arrowRightAnimation {
      from {
        transform: translate(0%, 0%);
      }
      to {
        transform: translate(-15%, 0%);
      }
    }
  }
`;

const PaginationButton = styled(Button)`
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  padding: 0;
  margin: 0;

  &:hover {
    background: none;
  }
`;

const PageNumber = styled.div`
  color: white;
`;

const BuildLink = ({ username, tag, page }) => {
  const query = qs.stringify({
    tag,
    page,
  });
  return username ? `/@${username}?${query}` : `/?${query}`;
};

const Pagination = ({ page, lastPage, username, tag }) => {
  console.log(lastPage);
  return (
    <PaginationBlock>
      <PaginationButton
        className="left"
        disabled={page === 1}
        to={
          page === 1 ? undefined : BuildLink({ username, tag, page: page - 1 })
        }
      >
        <LeftOutlined />
      </PaginationButton>
      <PageNumber>{page}</PageNumber>
      <PaginationButton
        className="right"
        disabled={page === lastPage}
        to={
          page === lastPage
            ? undefined
            : BuildLink({ username, tag, page: page + 1 })
        }
      >
        <RightOutlined />
      </PaginationButton>
    </PaginationBlock>
  );
};

export default Pagination;
