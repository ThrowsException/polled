import React from "react";
import styled from "styled-components";
import Question from "./question";
import AddQuestion from "./addQuestion";

const BuilderWrapper = styled.div`
  min-height: 5rem;
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: 2px;
`;

export default () => {
  return (
    <BuilderWrapper>
      <Question />
      <AddQuestion />
    </BuilderWrapper>
  );
};
