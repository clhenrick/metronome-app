import { createRoot } from 'react-dom/client';

import 'normalize.css';
import 'react-rangeslider/lib/index.css';
import './scss/main.scss';
import './utils/monkeypatch';

import ReduxEntry from './ReduxEntry';

const root = createRoot(document.getElementById('root'));
root.render(<ReduxEntry />);
