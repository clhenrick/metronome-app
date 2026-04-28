import React from 'react';
import { render } from 'react-dom';

import 'normalize.css';
import 'react-rangeslider/lib/index.css';
import './scss/main.scss';
import './utils/monkeypatch';

import ReduxEntry from './ReduxEntry';

render(<ReduxEntry />, document.getElementById('root'));
