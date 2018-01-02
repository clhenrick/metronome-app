import React from 'react';
import PropTypes from 'prop-types';

const TempoDisplay = ({ tempo }) => (
  <div className="TempoDisplay">
    <p>
      <span>{tempo}</span> bpm
    </p>
  </div>
);

TempoDisplay.propTypes = {
  tempo: PropTypes.number.isRequired,
};

export default TempoDisplay;
