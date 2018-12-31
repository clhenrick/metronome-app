import React from 'react';
import PropTypes from 'prop-types';

import { ArrowDown, ArrowUp } from './Icons';

const MeterControl = ({ meter, handleChange }) => {
  function handleClick(action) {
    switch (action) {
      case 'increment':
        handleChange(meter + 1);
        break;
      case 'decrement':
        handleChange(meter - 1);
        break;
      default:
        break;
    }
  }

  return (
    <div className="MeterControl">
      <button onClick={() => handleClick('increment')}>
        <ArrowUp width={50} height={50} fillColor="#f93bcf" />
      </button>
      <button onClick={() => handleClick('decrement')}>
        <ArrowDown width={50} height={50} fillColor="#f93bcf" />
      </button>
    </div>
  );
};

MeterControl.propTypes = {
  handleChange: PropTypes.func.isRequired,
  meter: PropTypes.number.isRequired,
};

export default MeterControl;
