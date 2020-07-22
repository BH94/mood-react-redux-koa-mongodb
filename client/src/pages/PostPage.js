import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostViewerContainer from '../containers/post/PostViewerContainer';

const PostPage = () => {
  return (
    <>
      <Helmet>
        <title>Post Detail - Today, mood</title>
      </Helmet>
      <HeaderContainer />
      <PostViewerContainer />
    </>
  );
};

export default PostPage;
