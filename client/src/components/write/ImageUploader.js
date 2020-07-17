import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';
import { PlusCircleOutlined } from '@ant-design/icons';
import axios from 'axios';

const DropzoneDiv = styled.div`
  width: 100%;
  min-height: 5rem;
`;

const DropZone = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: #e0e5ec;
  border: 2px solid white;
  background: none;
`;

const ImageUploader = () => {
  const [images, setImages] = useState([]);

  const dropHandler = (files) => {
    const formData = new FormData();
    const config = {
      header: { 'content-type': 'multipart/form-data' },
    };
    formData.append('file', files[0]);
    axios.post('/api/posts/image', formData, config).then((response) => {
      if (response.data.success) {
        console.log(response.data);
        setImages([...images, response.data.filePath]);
        console.log(images);
        alert('success');
      } else {
        alert('fail');
      }
    });
  };

  return (
    <>
      <DropzoneDiv>
        <Dropzone onDrop={dropHandler}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <DropZone {...getRootProps()}>
                <input {...getInputProps()} />
                <PlusCircleOutlined
                  style={{ fontSize: '5rem', color: 'white' }}
                />
              </DropZone>
            </section>
          )}
        </Dropzone>
      </DropzoneDiv>
      {images.map((image, idx) => (
        <div>
          <img src={`http://localhost:5000/${image}`} />
        </div>
      ))}
    </>
  );
};

export default ImageUploader;
