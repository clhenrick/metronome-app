import React from 'react';
import PropTypes from 'prop-types';

import { Play, Pause } from './Icons';

const PlayPauseBtn = ({ isPlaying, handleClick }) => (
  <button className="PlayPauseBtn" onClick={handleClick}>
    {isPlaying ? (
      <Pause width={100} height={100} fillColor="#f93bcf" />
    ) : (
      <Play width={100} height={100} fillColor="#f93bcf" />
    )}
  </button>
);

PlayPauseBtn.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default PlayPauseBtn;
