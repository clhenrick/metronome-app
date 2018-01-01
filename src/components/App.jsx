import React, { Component } from 'react';
import { init, play } from '../utils/metronome';

class App extends Component {
  componentDidMount() {
    init();
    play();
  }

  render() {
    return <div className="App" />;
  }
}

export default App;
