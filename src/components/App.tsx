import { useEffect, useRef } from 'react';

import { useMetronome } from '../context/MetronomeContext';
import preventDoubleTapZoom from '../utils/helpers';

import MeterControl from './MeterControl';
import MeterDisplay from './MeterDisplay';
import TempoDisplay from './TempoDisplay';
import TempoSlider from './TempoSlider';
import PlayPauseBtn from './PlayPauseBtn';
import VolumeControls from './VolumeControls';

function App() {
  const appRef = useRef<HTMLDivElement | null>(null);
  const { isPlaying, meter, setMeter, setTempo, tempo, togglePlayPause } = useMetronome();

  useEffect(() => {
    const el = appRef.current;
    if (!el) return;
    el.addEventListener('touchstart', preventDoubleTapZoom);
    return () => el.removeEventListener('touchstart', preventDoubleTapZoom);
  }, []);

  return (
    <div className="App" ref={appRef}>
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
    </div>
  );
}

export default App;
