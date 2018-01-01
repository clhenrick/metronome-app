import logger from 'redux-logger';

const middleware = [];

if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
  // redux-logger only works in a browser environment
  middleware.push(logger);
}

export default middleware;
