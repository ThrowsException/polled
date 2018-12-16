import React from "react";
import Link from "next/link";
import styled, { ThemeProvider } from "styled-components";
import Theme, { Globals } from "../styles/theme";
import { Container } from "react-awesome-styled-grid";

const Navigation = styled.nav`
  padding: 1rem 0;
`;

const Brand = styled.div`
  font-family: ${p => p.theme.fonts.brand};
  font-weight: ${p => p.theme.fonts.weights.semiBold};
  font-size: 1.5rem;
  font-weight: 500;
`;

const Logo = styled.div`
  width: 1rem;
  height: 1rem;
  background: ${p => p.theme.colors.primary};
  display: inline-block;
`;

export default ({ children }) => (
  <ThemeProvider theme={Theme}>
    <>
      <Globals />
      <Navigation>
        <Container>
          <Brand>
            <Logo />
            polled.io
          </Brand>
        </Container>
      </Navigation>
      {children}
    </>
  </ThemeProvider>
);
