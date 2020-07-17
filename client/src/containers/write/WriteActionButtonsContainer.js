import React, { useEffect } from 'react';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { writePost, updatePost } from '../../modules/write';

const WriteActionButtonsContainer = ({ history }) => {
  const dispatch = useDispatch();
  const {
    imageList,
    emotion,
    title,
    content,
    tags,
    post,
    postError,
    originalPostId,
  } = useSelector(({ write }) => ({
    imageList: write.imageList,
    emotion: write.emotion,
    title: write.title,
    content: write.content,
    tags: write.tags,
    post: write.post,
    postError: write.postError,
    originalPostId: write.originalPostId,
  }));

  const onPublish = () => {
    if (originalPostId) {
      dispatch(
        updatePost({
          imageList,
          emotion,
          title,
          content,
          tags,
          id: originalPostId,
        }),
      );
      return;
    }
    dispatch(writePost({ imageList, emotion, title, content, tags }));
  };

  const onCancel = () => {
    history.goBack();
  };

  useEffect(() => {
    if (post) {
      const { _id, user } = post;
      history.push(`/@${user.username}/${_id}`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [history, post, postError]);

  return (
    <WriteActionButtons
      onPublish={onPublish}
      onCancel={onCancel}
      isEdit={!!originalPostId}
    />
  );
};

export default withRouter(WriteActionButtonsContainer);
