import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

// tell webpack to use our scss
import './scss/main.scss';
// web audio api monkeypatch
import './utils/monkeypatch';
// parent component wrapped in Redux
import ReduxEntry from './ReduxEntry';

const renderApp = Component => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};

renderApp(ReduxEntry);

if (module.hot) {
  module.hot.accept('./ReduxEntry', () => renderApp(ReduxEntry));
}
