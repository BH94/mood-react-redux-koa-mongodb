import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';

const TagBoxBlock = styled.div`
  width: 100%;
  padding-top: 2rem;
`;

const TagForm = styled.form`
  width: 100%;
  display: flex;
  overflow: hidden;
  input {
    background: none;
    outline: none;
    border: none;

    width: 100%;
    caret-color: white;
    font-size: 1.4rem;
    border-bottom: 4px solid #fff;

    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;

const Tag = styled.div`
  background: white;
  border-radius: 5px;
  margin-right: 0.5rem;
  color: #131c27;
  &:hover {
    opacity: 0.5;
  }
`;

const TagListBlock = styled.div`
  display: flex;
  margin-top: 0.5rem;
  overflow-x: auto;
  white-space: nowrap;
  .tag {
    display: inline-block;
  }
  &::-webkit-scrollbar {
    background: #131c27;
  }

  @media screen and (max-width: 786px) {
    font-size: 1rem;
    padding: 0.5rem 2rem;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const TagItem = React.memo(({ tag, onRemove }) => (
  <Tag onClick={() => onRemove(tag)}>#{tag}</Tag>
));

const TagList = React.memo(({ tags, onRemove }) => (
  <TagListBlock>
    {tags.map((tag) => (
      <TagItem className="tag" key={tag} tag={tag} onRemove={onRemove} />
    ))}
  </TagListBlock>
));

const Tagbox = ({ tags, onChangeTags }) => {
  const [input, setInput] = useState('');
  const [localTags, setLocalTags] = useState([]);

  const insertTag = useCallback(
    (tag) => {
      if (!tag) return;
      if (localTags.includes(tag)) return;
      const nextTags = [...localTags, tag];
      setLocalTags(nextTags);
      onChangeTags(nextTags);
    },
    [localTags, onChangeTags],
  );

  const onRemove = useCallback(
    (tag) => {
      setLocalTags(localTags.filter((t) => t !== tag));
    },
    [localTags],
  );

  const onChange = useCallback((e) => {
    setInput(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      insertTag(input.trim());
      setInput('');
    },
    [input, insertTag],
  );

  useEffect(() => {
    setLocalTags(tags);
  }, [tags]);

  return (
    <TagBoxBlock>
      <TagForm onSubmit={onSubmit}>
        <input
          placeholder="해시태그 추가.."
          value={input}
          onChange={onChange}
        />
      </TagForm>
      <TagList tags={localTags} onRemove={onRemove} />
    </TagBoxBlock>
  );
};

export default Tagbox;
