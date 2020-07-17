import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';
import { PlusOutlined } from '@ant-design/icons';
import axios from 'axios';

const ImageUploadWrapper = styled.div`
  display: flex;
  width: 100%;
  background: none;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const UploadImagesList = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: left;
  overflow-x: auto;
  img {
    border-radius: 10px;
    min-width: 14rem;
    width: 14rem;
    height: 14rem;
  }
  .img-box {
    margin-left: 1rem;
    position: relative;
    /* .close-btn {
      visibility: hidden;
      position: absolute;
      top: 5%;
      right: 5%;
    }
    &:hover .close-btn {
      visibility: visible;
    } */
  }
`;

const DropZone = styled.div`
  min-width: 14rem;
  width: 14rem;
  height: 14rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  /* border: 2px solid white; */
`;

const ImageUploader = (props) => {
  const [images, setImages] = useState([]);

  const dropHandler = (files) => {
    const formData = new FormData();
    const config = {
      header: { 'content-type': 'multipart/form-data' },
    };
    formData.append('file', files[0]);
    axios.post('/api/posts/image', formData, config).then((response) => {
      if (response.data.success) {
        setImages([...images, response.data.fileName]);
        props.onChangeImage([...images, response.data.fileName]);
      } else {
        alert('fail');
      }
    });
  };

  const deleteHandler = (image) => {
    const currentIndex = images.indexOf(image);

    const newImages = [...images];
    newImages.splice(currentIndex, 1);

    setImages(newImages);
    props.onChangeImage(newImages);
  };

  return (
    <ImageUploadWrapper>
      <UploadImagesList>
        <Dropzone onDrop={dropHandler}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <DropZone {...getRootProps()}>
                <input {...getInputProps()} />
                <PlusOutlined
                  style={{ fontSize: '2.4rem', color: '#242424' }}
                />
              </DropZone>
            </section>
          )}
        </Dropzone>
        {props.imageList.map((image, idx) => (
          <div
            className="img-box"
            key={idx}
            onClick={() => deleteHandler(image)}
          >
            <img src={`http://localhost:5000/${image}`} width="30%" />
          </div>
        ))}
      </UploadImagesList>
    </ImageUploadWrapper>
  );
};

export default ImageUploader;
