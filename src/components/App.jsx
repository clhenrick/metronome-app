import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { init } from '../utils/metronome';

class App extends Component {
  static propTypes = {
    togglePlayPause: PropTypes.func.isRequired,
  };

  componentDidMount() {
    init();

    // manually invoke to make sure it's working
    this.props.togglePlayPause();
    setTimeout(() => {
      this.props.togglePlayPause();
    }, 5000);
  }

  render() {
    return <div className="App" />;
  }
}

export default App;
