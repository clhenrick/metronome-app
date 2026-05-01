import { createRoot } from 'react-dom/client';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './scss/main.scss';

import { MetronomeProvider } from './context/MetronomeContext';
import App from './components/App';

const root = createRoot(document.getElementById('root')!);
root.render(
  <MetronomeProvider>
    <App />
  </MetronomeProvider>,
);
