import React from 'react';
import PropTypes from 'prop-types';

// exported for testing
export function IconWrapper({ fillColor, width, height }, children) {
  return (
    <svg fill={fillColor} height={height} viewBox="0 0 24 24" width={width}>
      {children}
    </svg>
  );
}

IconWrapper.propTypes = {
  fillColor: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

IconWrapper.defaultProps = {
  fillColor: '#222',
};

export const ArrowDown = props =>
  IconWrapper(props, [
    <path key="a" d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />,
    <path key="b" d="M0-.75h24v24H0z" fill="none" />,
  ]);

export const ArrowUp = props =>
  IconWrapper(props, [
    <path key="a" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />,
    <path key="b" d="M0 0h24v24H0z" fill="none" />,
  ]);

export const Play = props =>
  IconWrapper(props, [
    <path key="a" d="M8 5v14l11-7z" />,
    <path key="b" d="M0 0h24v24H0z" fill="none" />,
  ]);

export const Pause = props =>
  IconWrapper(props, [
    <path key="a" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />,
    <path key="b" d="M0 0h24v24H0z" fill="none" />,
  ]);
