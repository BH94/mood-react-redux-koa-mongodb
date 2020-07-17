import React, { useState } from 'react';
import styled from 'styled-components';
import AskRemoveModal from './AskRemoveModal';

const PostActionButtonBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
`;

const ActionButton = styled.button`
  background: rgba(255, 255, 255, 0.5);
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  font-weight: bolder;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  color: white;
  color: ${(props) => props.hc || 'black'};
  /* background: none; */

  &:hover {
    background: ${(props) => props.hc || 'black'};
    color: white;
  }

  & + & {
    margin-left: 0.25rem;
  }
`;

const PostActionButton = ({ onEdit, onRemove }) => {
  const [modal, setModal] = useState(false);

  const onRemoveClick = () => {
    setModal(true);
  };

  const onCancel = () => {
    setModal(false);
  };

  const onConfirm = () => {
    setModal(false);
    onRemove();
  };

  return (
    <>
      <PostActionButtonBlock>
        <ActionButton onClick={onEdit} hc="rgb(69, 66, 105)">
          EDIT
        </ActionButton>
        <ActionButton onClick={onRemoveClick} hc="rgb(124,10,2)">
          DELETE
        </ActionButton>
      </PostActionButtonBlock>
      <AskRemoveModal
        visible={modal}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </>
  );
};

export default PostActionButton;
