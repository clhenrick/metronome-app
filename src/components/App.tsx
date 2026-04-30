import { useMetronome } from '../context/MetronomeContext';

import MeterControl from './MeterControl';
import MeterDisplay from './MeterDisplay';
import TempoDisplay from './TempoDisplay';
import TempoSlider from './TempoSlider';
import PlayPauseBtn from './PlayPauseBtn';
import VolumeControls from './VolumeControls';

function App() {
  const { isPlaying, meter, setMeter, setTempo, tempo, togglePlayPause } = useMetronome();

  return (
    <main className="App">
      <div className="top-controls-panel">
        <TempoDisplay tempo={tempo} />
        <PlayPauseBtn isPlaying={isPlaying} handleClick={togglePlayPause} />
      </div>
      <TempoSlider handleChange={setTempo} tempo={tempo} />
      <div className="meter-panel">
        <h3 className="title">Meter</h3>
        <div>
          <MeterDisplay meter={meter} />
          <MeterControl handleChange={setMeter} meter={meter} />
        </div>
      </div>
      <VolumeControls />
    </main>
  );
}

export default App;
