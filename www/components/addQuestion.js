import React from "react";
import styled from "styled-components";

const AddQuestionWrapper = styled.div`
  border-top: 1px solid ${p => p.theme.colors.border};
  display: flex;
`;

const AddQuestionButton = styled.button`
  border: none;
  color: green;
  width: 100%;
  font-size: 0.5rem;
  background: transparent;
  padding: 1rem;
  border-right: 1px solid ${p => p.theme.colors.border};
`;

export default () => {
  return (
    <AddQuestionWrapper>
      <div>Click to add question</div>
      <AddQuestionButton>Open</AddQuestionButton>
      <AddQuestionButton>Check</AddQuestionButton>
      <AddQuestionButton>Radio</AddQuestionButton>
      <AddQuestionButton>Essay</AddQuestionButton>
    </AddQuestionWrapper>
  );
};
