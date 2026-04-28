const Worker = jest.fn();
const timerWorker = new Worker();
timerWorker.onmessage = jest.fn();
timerWorker.postMessage = jest.fn();

const metronome = jest.fn();
metronome.play = jest.fn();
metronome.setTempo = jest.fn();
metronome.setMeter = jest.fn();
metronome.setMasterVolume = jest.fn();
metronome.setAccentVolume = jest.fn();
metronome.setQuarterVolume = jest.fn();
metronome.setEigthVolume = jest.fn();
metronome.setSixteenthVolume = jest.fn();
metronome.setTripletVolume = jest.fn();
metronome.init = jest.fn();

module.exports = metronome;
