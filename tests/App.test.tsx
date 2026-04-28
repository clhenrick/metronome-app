import { render, screen } from '@testing-library/react';
import App from '../src/components/App';
import { MetronomeProvider } from '../src/context/MetronomeContext';

vi.mock('../src/utils/metronome', () => ({
  init: vi.fn(),
  play: vi.fn(),
  setTempo: vi.fn(),
  setMeter: vi.fn(),
  setMasterVolume: vi.fn(),
  setAccentVolume: vi.fn(),
  setQuarterVolume: vi.fn(),
  setEigthVolume: vi.fn(),
  setSixteenthVolume: vi.fn(),
  setTripletVolume: vi.fn(),
}));

const renderApp = () =>
  render(
    <MetronomeProvider>
      <App />
    </MetronomeProvider>
  );

describe('App', () => {
  it('renders the App container', () => {
    const { container } = renderApp();
    expect(container.querySelector('.App')).toBeInTheDocument();
  });

  it('renders the top controls panel', () => {
    const { container } = renderApp();
    expect(container.querySelector('.top-controls-panel')).toBeInTheDocument();
  });

  it('renders the meter panel', () => {
    const { container } = renderApp();
    expect(container.querySelector('.meter-panel')).toBeInTheDocument();
  });

  it('renders a play/pause button', () => {
    renderApp();
    expect(screen.getAllByRole('button').length).toBeGreaterThan(0);
  });

  it('renders volume sliders', () => {
    const { container } = renderApp();
    const sliders = container.querySelectorAll('input[type="range"]');
    expect(sliders.length).toBeGreaterThan(0);
  });
});
