import React from 'react';

import BackgroundDiv from '../components/common/Background';

import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';

const PostListPage = () => {
  return (
    <>
      <HeaderContainer />
      <BackgroundDiv>
        <PostListContainer />
        <PaginationContainer />
      </BackgroundDiv>
    </>
  );
};

export default PostListPage;
