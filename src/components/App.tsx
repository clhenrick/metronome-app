import { useMetronome } from '../context/MetronomeContext';
import MeterControl from './MeterControl';
import MeterDisplay from './MeterDisplay';
import TempoDisplay from './TempoDisplay';
import TempoSlider from './TempoSlider';
import PlayPauseBtn from './PlayPauseBtn';
import VolumeControls from './VolumeControls';
import { ThemeToggle } from './ThemeToggle';

function App() {
  const { isPlaying, meter, setMeter, setTempo, tempo, togglePlayPause } = useMetronome();

  return (
    <>
      <header>
        <h1>Metronome App</h1>
        <ThemeToggle />
      </header>
      <main className="App">
        <section>
          <h2 id="tempo-label">Tempo</h2>
          <div className="top-controls-panel">
            <TempoDisplay tempo={tempo} />
            <PlayPauseBtn isPlaying={isPlaying} handleClick={togglePlayPause} />
          </div>
          <TempoSlider handleChange={setTempo} tempo={tempo} />
        </section>
        <section className="meter-panel">
          <h2>Meter</h2>
          <div>
            <MeterDisplay meter={meter} />
            <MeterControl handleChange={setMeter} meter={meter} />
          </div>
        </section>
        <section>
          <h2>Volume</h2>
          <VolumeControls />
        </section>
      </main>
    </>
  );
}

export default App;
