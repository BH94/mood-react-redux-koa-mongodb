import React, { useEffect, useCallback } from 'react';
import Editor from '../../components/write/Editor';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from '../../modules/write';

const EditorContainer = () => {
  const dispatch = useDispatch();
  const { imageList, emotion, title, content } = useSelector(({ write }) => ({
    imageList: write.imageList,
    emotion: write.emotion,
    title: write.title,
    content: write.content,
  }));

  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch],
  );

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  return (
    <Editor
      onChangeField={onChangeField}
      imageList={imageList}
      emotion={emotion}
      title={title}
      content={content}
    />
  );
};

export default EditorContainer;
