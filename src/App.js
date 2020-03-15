import React, { Component } from 'react';
import './App.css';

import AddNumberRoot from './components/AddNumberRoot'
import DisplayNumberRoot from './components/DisplayNumberRoot'

class App extends Component {
  state = {
    number:0
  }

  render() {
    return (
      <div className="App">
        <h1>ROOT</h1>
        <AddNumberRoot />
        <DisplayNumberRoot />
        <TestNumberRoot />
      </div>
    );
  }
}

class TestNumberRoot extends Component {
  render() {
    return(
      <div>
        <h1>Etc Number Root</h1>
        <TestNumber></TestNumber>
      </div>
    )
  }
}

class TestNumber extends Component {
  render() {
    return(
      <div>
        TEST
      </div>
    )
  }
}

export default App;
