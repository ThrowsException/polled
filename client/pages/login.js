import React from "react";
import styled from "styled-components";
import config from "../config";
import PropTypes from "prop-types";
import Landing from "../layouts/landing";
import { Container, Row, Col } from "react-awesome-styled-grid";
import Amplify, { Auth } from "aws-amplify";

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  }
  // Storage: {
  //   region: config.s3.REGION,
  //   bucket: config.s3.BUCKET,
  // },
  // API: {
  //   endpoints: [
  //     {
  //       name: "notes",
  //       endpoint: config.apiGateway.URL,
  //       region: config.apiGateway.REGION
  //     }
  //   ]
  // }
});

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

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      login_name: "",
      password: ""
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();

    this.setState({ isLoading: true });

    try {
      Auth.signIn(this.state.login_name, this.state.password).then(user => {
        console.log(user);
        if (user.challengeName == "NEW_PASSWORD_REQUIRED") {
          console.error("Not Implemented");
          // Auth.completeNewPassword(user, "test", {
          //   email: "test@testthing.com"
          // });
        } else {
          alert("success");
        }
      });
      // this.props.userHasAuthenticated(true);
    } catch (e) {
      alert(e.message);
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { list } = this.state;
    return (
      <Landing>
        <Container>
          <Hero>
            <HeroTitle>Build and serve forms in seconds.</HeroTitle>
            <HeroSubtitle>
              Get started now. Create your form and then hit publish.
            </HeroSubtitle>
          </Hero>
          <div id="login_form">
            <label htmlFor="login_name">
              Login
              <input
                id="login_name"
                name="login"
                value={this.state.login_name}
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="password">
              Password
              <input
                id="password"
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </label>
            <button onClick={this.handleSubmit}>Login</button>
          </div>
        </Container>
      </Landing>
    );
  }
}
