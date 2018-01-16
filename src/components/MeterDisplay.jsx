import React from 'react';
import PropTypes from 'prop-types';

const MeterDisplay = ({ meter }) => (
  <div className="MeterDisplay">
    <p>
      {meter} <span>/ 4</span>
    </p>
  </div>
);

MeterDisplay.propTypes = {
  meter: PropTypes.number.isRequired,
};

export default MeterDisplay;
