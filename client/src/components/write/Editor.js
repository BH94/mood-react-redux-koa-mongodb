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

const Editor = ({ imageList, title, content, onChangeField }) => {
  const [image, setImage] = useState([]);

  const onChangeTitle = (e) => {
    onChangeField({ key: 'title', value: e.target.value });
  };

  const onChangeContent = (e) => {
    onChangeField({ key: 'content', value: e.target.value });
  };

  const onChangeImage = (newImage) => {
    setImage(newImage);
    onChangeField({ key: 'imageList', value: newImage });
  };

  return (
    <div style={{ width: '100%' }}>
      <ImageUploader onChangeImage={onChangeImage} imageList={imageList} />
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
