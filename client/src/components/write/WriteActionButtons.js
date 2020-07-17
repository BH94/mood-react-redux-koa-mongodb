import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const WriteActionButtonBlock = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
  display: flex;

  button + button {
    margin-left: 0.5rem;
  }
`;

const StyledButton = styled(Button)`
  /* border: 2px solid rgb(0, 130, 140); */
  border: none;
  color: rgb(0, 130, 140);
  & + & {
    margin-left: 0.5rem;
  }
`;

const StyledCancelButton = styled(Button)`
  /* border: 2px solid #f67280; */
  border: none;
  color: #f67280;
  &:hover {
    background: #f67280;
  }
`;

const WriteActionButton = ({ onPublish, onCancel, isEdit }) => {
  return (
    <WriteActionButtonBlock>
      <StyledButton onClick={onPublish}>
        {isEdit ? '수정' : '작성'} 완료
      </StyledButton>
      <StyledCancelButton onClick={onCancel}>취소</StyledCancelButton>
    </WriteActionButtonBlock>
  );
};

export default WriteActionButton;
