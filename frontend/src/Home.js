import React from "react";
import logo from "./react.svg";
import "./Home.css";
import styled from "styled-components";
import PropTypes from "prop-types";
import { DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import { Element } from "./element";
import { Form, FormPreview } from "./form";

const Container = styled.div`
  display: flex;
`;

const MainContainer = styled.div`
  flex: 3;
`;

const ElementsContainer = styled.div`
  flex: 1;
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
      <DragDropContextProvider backend={HTML5Backend}>
        <div className="Home">
          <div className="Home-header">
            <img src={logo} className="Home-logo" alt="logo" />
            <h2>Welcome to Polled.io</h2>
          </div>
          <Container>
            <MainContainer>
              <p className="Home-intro">Vote for your favorite costume</p>

              <Form items={this.state.list} onDrop={this.handleDrop} />
              <FormPreview items={this.state.list} />
            </MainContainer>
            <ElementsContainer>
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
            </ElementsContainer>
          </Container>
        </div>
      </DragDropContextProvider>
    );
  }
}

export default Home;
