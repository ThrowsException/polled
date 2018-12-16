import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-awesome-styled-grid";
import Landing from "../layouts/landing";
import Builder from "../components/builder";

const Hero = styled.div`
  text-align: center;
`;
const HeroTitle = styled.h1`
  font-family: ${p => p.theme.fonts.brand};
  font-weight: 600;
  font-size: 2rem;
  text-align: center;
  margin: 0;
`;
const HeroSubtitle = styled.p`
  margin: 0.5rem 0 0 0;
  color: ${p => p.theme.colors.lightText};
`;
const Aligner = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;
const BuilderContainer = styled.div`
  margin-top: 5rem;
  width: 100%;
`;
const PublishButton = styled.button`
  margin: 2rem 0 0 0;
  width: 100%;
  display: block;
  background: #FFF;
  padding: 1rem 0;
  border: none;
  outline: none;
  font-family ${p => p.theme.fonts.brand};
  font-size: 1rem;
  color: ${p => p.theme.colors.primary};
  box-sizing: border-box;
  border: 2px solid ${p => p.theme.colors.primary};
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    background: ${p => p.theme.colors.primary};
    color: #FFF;
  }
`;

export default () => (
  <Landing>
    <Container>
      <Hero>
        <HeroTitle>Build and serve a form in seconds.</HeroTitle>
        <HeroSubtitle>
          Get started now. Create your form and then hit publish.
        </HeroSubtitle>
      </Hero>
      <BuilderContainer>
        <Aligner>
          <Builder />
        </Aligner>
        <Aligner>
          <PublishButton>Publish!</PublishButton>
        </Aligner>
      </BuilderContainer>
    </Container>
  </Landing>
);
