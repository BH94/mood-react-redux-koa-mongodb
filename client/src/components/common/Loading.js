import React from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined spin />;

const LoadingBlock = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 5rem;
  background: rgb(34, 34, 34);
`;

const Loading = () => {
  return (
    <LoadingBlock>
      <Spin indicator={antIcon} />
    </LoadingBlock>
  );
};

export default Loading;
