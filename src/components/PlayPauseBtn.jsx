import React from 'react';
import PropTypes from 'prop-types';

const PlayPauseBtn = ({ label, handleClick }) => (
  <button className="PlayPauseBtn button-primary" onClick={handleClick}>
    {label}
  </button>
);

PlayPauseBtn.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default PlayPauseBtn;
