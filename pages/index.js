import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import { Element } from "../components/element";
import { Form, FormPreview } from "../components/form";
import Landing from "../layouts/landing";
import { Container, Row, Col } from "react-awesome-styled-grid";

const ElementsContainer = styled.div`
  flex: 1;
`;

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

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleDrop = this.handleDrop.bind(this);
    this.state = {
      list: []
    };
  }

  handleDrop = (item, index) => {
    let { list } = this.state;
    const newList = [...list, item];
    this.setState({ list: newList });
  };

  render() {
    const { list } = this.state;
    return (
      <Landing>
        <Container>
          <Hero>
            <HeroTitle>Build and serve a form in seconds.</HeroTitle>
            <HeroSubtitle>
              Get started now. Create your form and then hit publish.
            </HeroSubtitle>
          </Hero>
          <DragDropContextProvider backend={HTML5Backend}>
            <Row>
              <Col>
                <Form items={this.state.list} onDrop={this.handleDrop} />
              </Col>
              <Col>
                <ul>
                  <li>
                    <Element name="Text" type="text" />
                  </li>
                  <li>
                    <Element name="Radio" type="radio" />
                  </li>
                  <li>
                    <Element name="Checkbox" type="checkbox" />
                  </li>
                </ul>
              </Col>
            </Row>
          </DragDropContextProvider>
        </Container>
      </Landing>
    );
  }
}

export default Home;
