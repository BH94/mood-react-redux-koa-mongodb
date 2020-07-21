import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import PostTitleEmojiDiv from '../common/PostTitleEmoji';

import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';
import { Link } from 'react-router-dom';
import Error from '../common/Error';
import Loading from '../common/Loading';

const PostListBlock = styled(Responsive)`
  width: 90%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const PostItemBlock = styled.div`
  background-image: ${(props) => `url(${props.imgUrl})`};
  background-size: cover;
  background-position: center;
  position: relative;
  border-radius: 2px;
  height: 24rem;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  &:after {
  }

  &:first-child {
    margin-top: 0;
    margin-bottom: 2rem;
  }

  & + & {
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ItemsBlock = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  width: 90%;

  p {
    margin-top: 2rem;
    font-size: 1.2rem;
    word-break: break-all;
    width: 100%;
    text-shadow: 1px 2px 4px black;
  }

  .title-item {
    color: white;
    text-decoration: none;
    cursor: pointer;
    text-shadow: 1px 2px 4px black;
  }

  @media screen and (max-width: 768px) {
    p {
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 425px) {
    p {
      font-size: 1rem;
    }
  }
`;

const NewWriteButton = styled(Button)`
  font-size: 1.5rem;
  margin-top: 2rem;
  font-weight: bold;
  padding: 1rem 2rem;
  border: 3px solid white;
  border-radius: 5px;
  text-align: center;

  &:hover {
    background: none;
    color: #131c27;
    box-shadow: 210px 0 0 0 rgba(255, 255, 255, 1) inset;
  }

  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;

const PostItem = ({ post }) => {
  const { imageList, publishedDate, user, tags, title, content, _id } = post;

  const backImg = imageList[0];

  return (
    <PostItemBlock imgUrl={`http://18.189.29.190:5000/${backImg}`}>
      <ItemsBlock>
        <PostTitleEmojiDiv>
          <div className="title">
            <h2>
              <Link className="title-item" to={`/@${user.username}/${_id}`}>
                {title.length < 30 ? title : title.slice(0, 30) + '...'}
              </Link>
            </h2>
          </div>
        </PostTitleEmojiDiv>
        <SubInfo
          username={user.username}
          publishedDate={new Date(publishedDate)}
        />
        <Tags tags={tags} />
        <p>{content.length < 200 ? content : content.slice(0, 200) + ' ...'}</p>
      </ItemsBlock>
    </PostItemBlock>
  );
};

const PostList = ({ posts, loading, error, showWriteButton }) => {
  if (error) {
    return (
      <PostListBlock>
        <Error errorMsg="알 수 없는 에러가 발생하였습니다." />
      </PostListBlock>
    );
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <PostListBlock>
      <WritePostButtonWrapper>
        {showWriteButton && (
          <NewWriteButton to="/write">NEW POST</NewWriteButton>
        )}
      </WritePostButtonWrapper>
      {!loading && posts && (
        <div>
          {posts.map((post) => (
            <PostItem post={post} key={post._id} />
          ))}
        </div>
      )}
    </PostListBlock>
  );
};

export default PostList;
