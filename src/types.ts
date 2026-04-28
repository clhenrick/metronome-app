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

export const defaultState: AppState = {
  isPlaying: false,
  tempo: 120,
  meter: 4,
  masterVolume: 0.5,
  accentVolume: 1,
  quarterVolume: 0.75,
  eighthVolume: 0,
  sixteenthVolume: 0,
  tripletVolume: 0,
};
