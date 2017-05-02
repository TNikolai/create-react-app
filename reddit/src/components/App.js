
import React, { Component } from 'react';
import logo from './logo.svg';
import '../styles/App.css';
import PostsList from './PostsList';

class App extends Component {
  render() {
    return (
      <div className="App">
         {this.props.children}
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
      </div>
    );
  }
}

export default App;
