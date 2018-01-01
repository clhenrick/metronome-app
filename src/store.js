import { applyMiddleware, createStore } from 'redux';

import rootReducer from './reducers/';
import middleware from './middleware';

function makeStore(initialState) {
  const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

  if (module.hot) {
    // Enable Webpack's "hot module replacement" for Redux reducers
    module.hot.accept('./reducers', () => {
      // eslint-disable-next-line
      const nextReducer = require('./reducers/index').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

const store = makeStore();
export default store;
