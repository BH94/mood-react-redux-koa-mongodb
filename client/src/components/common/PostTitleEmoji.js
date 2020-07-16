import React from 'react';
import styled from 'styled-components';

const PostTitleEmojiDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  .title {
    width: 80%;

    h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
      font-weight: 700;
    }

    h1 {
      font-size: 3rem;
      line-height: 1.5;
      margin: 0;
    }
  }

  .emoji {
    width: 10%;

    i {
      margin-left: 1.8rem;
      font-size: 2.5rem;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    .title,
    .emoji {
      width: 100%;
      h2 {
        font-size: 1.8rem;
      }

      h1 {
        font-size: 2.2rem;
      }
    }

    .title {
      margin-top: 1rem;
    }

    .emoji {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  @media screen and (max-width: 425px) {
    .title {
      h2 {
        font-size: 1.4rem;
      }
      h1 {
        font-size: 1.8rem;
      }
    }
  }
`;

const PostTitleEmoji = ({ children }) => {
  return <PostTitleEmojiDiv>{children}</PostTitleEmojiDiv>;
};

export default PostTitleEmoji;
