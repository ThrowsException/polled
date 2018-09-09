import React from 'react';
import logo from './react.svg';
import './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:4000/list')
      .then(response => response.json())
      .then(data => this.setState({ list: data }));
  }

  render() {
    const {list} = this.state;
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to Polled.io</h2>
        </div>
        <p className="Home-intro">
          Vote for your favorite costume
        </p>
        <ul className="Home-resources">
          {list.map(x => <li id={x.name}>{x.name}</li>)}
        </ul>
      </div>
    );
  }
}

export default Home;
