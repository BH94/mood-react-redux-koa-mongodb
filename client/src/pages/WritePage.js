import React from 'react';

import EditorContainer from '../containers/write/EditorContainer';
import TagboxContainer from '../containers/write/TagboxContainer';
import WriteActionButtonsContainer from '../containers/write/WriteActionButtonsContainer';

import WriteTemplate from '../components/write/WriteTemplate';
import BackgroundDiv from '../components/common/Background';

const PostPage = () => {
  return (
    <BackgroundDiv>
      <WriteTemplate>
        <EditorContainer />
        <TagboxContainer />
        <WriteActionButtonsContainer />
      </WriteTemplate>
    </BackgroundDiv>
  );
};

export default PostPage;
