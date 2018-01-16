import React from 'react';
import PropTypes from 'prop-types';

const MeterControl = ({ meter, handleChange }) => {
  function handleClick(action) {
    switch (action) {
      case 'increment':
        handleChange(meter + 1);
        break;
      case 'decrement':
        // prevent meter from reaching zero
        if (meter === 1) return;
        handleChange(meter - 1);
        break;
      default:
        break;
    }
  }

  return (
    <div className="MeterControl">
      <button onClick={() => handleClick('increment')}>up</button>
      <button onClick={() => handleClick('decrement')}>down</button>
    </div>
  );
};

MeterControl.propTypes = {
  handleChange: PropTypes.func.isRequired,
  meter: PropTypes.number.isRequired,
};

export default MeterControl;
