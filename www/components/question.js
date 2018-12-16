import React, { useState } from "react";
import styled from "styled-components";

const QuestionWrapper = styled.div`
  padding: 1rem;
`;

const QuestionText = styled.input`
  font-size: 1rem;
  font-weight: 600;
  outline: none;
  border: none;
  padding-left: 0;
`;
const AnswerSection = styled.div``;
const Answer = styled.div`
  padding-left: 1rem;
`;

export default () => {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState(["Example answer", "Other answer"]);

  return (
    <QuestionWrapper>
      <QuestionText
        value={question}
        placeholder="Enter your first question"
        onChange={e => setQuestion(e.target.value)}
      />
      <AnswerSection>
        {answers.map(a => (
          <Answer key={a}>
            <input type="checkbox" />
            {a}
          </Answer>
        ))}
      </AnswerSection>
    </QuestionWrapper>
  );
};
