import React, { Component } from 'react';
import { init } from '../utils/metronome';

class App extends Component {
  componentDidMount() {
    init();
  }

  render() {
    return <div className="App" />;
  }
}

export default App;
