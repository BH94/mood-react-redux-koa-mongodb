import React from 'react';
import styled from 'styled-components';
import BackgroundDiv from '../common/Background';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';
import PostTitleEmojiDiv from '../common/PostTitleEmoji';
import Error from '../common/Error';
import Loading from '../common/Loading';
import Slider from 'react-slick';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const SlideBlock = styled.div`
  width: 100%;
  height: 100vh;
`;

const PostViewerBlock = styled.div`
  min-height: ${(props) => props.mh || '100vh'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: ${(props) => `url(${props.imgUrl})`};
  background-size: cover;
  background-position: center;
  position: relative;
`;

const PostBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
      return <Error errorMsg="찾을 수 없는 페이지입니다." />;
    }
    return <Error errorMsg="알 수 없는 에러가 발생하였습니다." />;
  }

  if (loading || !post) {
    return <Loading />;
  }

  const { imageList, tags, title, content, user, publishedDate } = post;

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div>
      <Slider {...settings}>
        {imageList.map((image, idx) => {
          return (
            <PostViewerBlock
              imgUrl={`http://18.189.29.190:5000/${image}`}
              key={idx}
            ></PostViewerBlock>
          );
        })}
      </Slider>
      <PostBlock>
        <PostTitleEmojiDiv>
          <div className="title">
            <h1>{title}</h1>
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
    </div>
  );
};

export default PostViewer;
