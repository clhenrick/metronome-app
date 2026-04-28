export interface AppState {
  isPlaying: boolean;
  tempo: number;
  meter: number;
  masterVolume: number;
  accentVolume: number;
  quarterVolume: number;
  eighthVolume: number;
  sixteenthVolume: number;
  tripletVolume: number;
}

export interface AppDispatch {
  togglePlayPause: () => void;
  setTempo: (value: number) => void;
  setMeter: (value: number) => void;
  setMasterVolume: (value: number) => void;
  setAccentVolume: (value: number) => void;
  setQuarterVolume: (value: number) => void;
  setEigthVolume: (value: number) => void;
  setSixteenthVolume: (value: number) => void;
  setTripletVolume: (value: number) => void;
}

export type AppProps = AppState & AppDispatch;
