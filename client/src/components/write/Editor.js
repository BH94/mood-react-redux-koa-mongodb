import React, { useState } from 'react';
import styled from 'styled-components';
import ImageUploader from './ImageUploader';

const TitleInput = styled.input`
  background: none;
  font-size: 3rem;
  outline: none;
  border: none;
  caret-color: white;
  border-bottom: 4px solid white;
  width: 100%;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContentInput = styled.textarea`
  background: none;
  outline: none;
  border: none;
  caret-color: white;
  border-bottom: 4px solid white;
  font-size: 2rem;
  margin-top: 2rem;
  width: 100%;

  &::-webkit-scrollbar {
    background: none;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const EmojiBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

const EmoJi = styled.div`
  cursor: pointer;
  font-size: 3rem;
  opacity: ${(props) => props.opacity || 0.5};

  &:hover {
    opacity: 1;
    animation: imojiAnimation 0.5s infinite alternate ease-in-out;
  }

  & + & {
    margin-left: 1rem;
  }

  @keyframes imojiAnimation {
    from {
      transform: translate(0%, 0%);
    }
    to {
      transform: translate(0%, -10%);
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 3rem;

    & + & {
      margin-left: 0.5rem;
    }
  }

  @media screen and (max-width: 425px) {
    font-size: 2rem;

    & + & {
      margin-left: 0.5rem;
    }
  }
`;

const emojiList = [
  'em em-smiley',
  'em em-angry',
  'em em-worried',
  'em em-tired_face',
  'em em-cry',
];

const Editor = ({ imageList, emotion, title, content, onChangeField }) => {
  const [choiceEmoji, setChoiceEmoji] = useState('');
  const [image, setImage] = useState([]);

  const onChangeTitle = (e) => {
    onChangeField({ key: 'title', value: e.target.value });
  };

  const onChangeContent = (e) => {
    onChangeField({ key: 'content', value: e.target.value });
  };

  const onClick = (i) => {
    setChoiceEmoji(i);
    onChangeField({ key: 'emotion', value: i });
  };

  const onChangeImage = (newImage) => {
    setImage(newImage);
    onChangeField({ key: 'imageList', value: newImage });
  };

  return (
    <div>
      <ImageUploader onChangeImage={onChangeImage} imageList={imageList} />
      <EmojiBlock>
        {emojiList.map((emoji) => (
          <EmoJi
            key={emoji}
            onClick={() => onClick(emoji)}
            opacity={choiceEmoji === emoji ? 1 : 0.5}
          >
            <i className={emoji} />
          </EmoJi>
        ))}
      </EmojiBlock>
      <TitleInput
        placeholder="제목 입력..."
        value={title}
        onChange={onChangeTitle}
      />
      <ContentInput
        placeholder="문구 입력..."
        rows="5"
        value={content}
        onChange={onChangeContent}
      />
    </div>
  );
};

export default Editor;
