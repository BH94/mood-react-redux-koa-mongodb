import React from 'react';
import styled from 'styled-components';
import BackgroundDiv from '../common/Background';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';
import PostTitleEmojiDiv from '../common/PostTitleEmoji';
import BackgroundSlider from 'react-background-slider';

// const PostViewerBlock = styled(BackgroundDiv)`
//   background-image: ${(props) => `url(${props.imgUrl})`};
//   background-size: cover;
//   background-position: center;
// `;

const PostViewerBlock = styled.div`
  min-height: ${(props) => props.mh || '100vh'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: ${(props) => `url(${props.imgUrl})`};
  background-size: cover;
  background-position: center;
`;

const PostBlock = styled.div`
  width: 75%;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-self: center;
  background: rgba(0, 0, 0, 0.5);
`;

const PostContent = styled.div`
  font-size: 1.3125rem;
  color: white;
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

  const {
    imageList,
    tags,
    emotion,
    title,
    content,
    user,
    publishedDate,
  } = post;

  return (
    <PostViewerBlock imgUrl={`http://localhost:5000/${imageList[0]}`}>
      <PostBlock>
        <PostTitleEmojiDiv>
          <div className="title">
            <h1>{title}</h1>
          </div>
          {/* <div className="emoji">
            <i className={emotion} />
          </div> */}
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
