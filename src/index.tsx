import { createRoot } from 'react-dom/client';

import 'normalize.css';
import './scss/main.scss';
import './utils/monkeypatch';

import { MetronomeProvider } from './context/MetronomeContext';
import App from './components/App';

const root = createRoot(document.getElementById('root')!);
root.render(
  <MetronomeProvider>
    <App />
  </MetronomeProvider>,
);
