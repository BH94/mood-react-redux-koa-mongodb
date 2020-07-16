import React from 'react';
import styled from 'styled-components';
import BackgroundDiv from '../common/Background';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';
import PostTitleEmojiDiv from '../common/PostTitleEmoji';

const PostViewerBlock = styled(BackgroundDiv)``;

const PostBlock = styled.div`
  width: 75%;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const PostContent = styled.div`
  font-size: 1.3125rem;
  color: #000;
  word-break: break-all;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const PostViewer = ({ post, error, loading, actionButtons }) => {
  if (error) {
    if (error.response && error.response.status === 404) {
      return (
        <PostBlock>
          <p>존재하지 않는 포스트입니다.</p>
        </PostBlock>
      );
    }
    return (
      <PostBlock>
        <p>오류 발생!</p>
      </PostBlock>
    );
  }

  if (loading || !post) {
    return (
      <PostBlock>
        <p>로딩중입니다.</p>
      </PostBlock>
    );
  }

  const { tags, emotion, title, content, user, publishedDate } = post;

  return (
    <PostViewerBlock color="#facb4b">
      <PostBlock>
        <PostTitleEmojiDiv>
          <div className="title">
            <h1>{title}</h1>
          </div>
          <div className="emoji">
            <i className={emotion} />
          </div>
        </PostTitleEmojiDiv>
        <SubInfo
          username={user.username}
          publishedDate={publishedDate}
          hasMarginTop
        />
        <Tags tags={tags} />
        {actionButtons}
        <PostContent>{content}</PostContent>
      </PostBlock>
    </PostViewerBlock>
  );
};

export default PostViewer;
