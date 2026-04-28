import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { AppState, defaultState } from '../types';
import { getSavedState, setSavedState } from '../utils/localstorage';
import {
  init,
  play,
  setTempo as setMetronomeTempo,
  setMeter as setMetronomeMeter,
  setMasterVolume as setMetronomeMasterVolume,
  setAccentVolume as setMetronomeAccentVolume,
  setQuarterVolume as setMetronomeQuarterVolume,
  setEigthVolume as setMetronomeEighthVolume,
  setSixteenthVolume as setMetronomeSixteenthVolume,
  setTripletVolume as setMetronomeTripletVolume,
} from '../utils/metronome';

type Action =
  | { type: 'TOGGLE_PLAY_PAUSE' }
  | { type: 'SET_TEMPO'; tempo: number }
  | { type: 'SET_METER'; meter: number }
  | { type: 'SET_MASTER_VOLUME'; masterVolume: number }
  | { type: 'SET_ACCENT_VOLUME'; accentVolume: number }
  | { type: 'SET_QUARTER_VOLUME'; quarterVolume: number }
  | { type: 'SET_EIGHTH_VOLUME'; eighthVolume: number }
  | { type: 'SET_SIXTEENTH_VOLUME'; sixteenthVolume: number }
  | { type: 'SET_TRIPLET_VOLUME'; tripletVolume: number };

const clamp = (min: number, max: number) => (v: number) => Math.min(max, Math.max(min, v));
const clampTempo = clamp(1, 250);
const clampMeter = clamp(1, 13);
const clampVolume = clamp(0, 1);

export function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'TOGGLE_PLAY_PAUSE':
      return { ...state, isPlaying: !state.isPlaying };
    case 'SET_TEMPO':
      return { ...state, tempo: clampTempo(action.tempo) };
    case 'SET_METER':
      return { ...state, meter: clampMeter(action.meter) };
    case 'SET_MASTER_VOLUME':
      return { ...state, masterVolume: clampVolume(action.masterVolume) };
    case 'SET_ACCENT_VOLUME':
      return { ...state, accentVolume: clampVolume(action.accentVolume) };
    case 'SET_QUARTER_VOLUME':
      return { ...state, quarterVolume: clampVolume(action.quarterVolume) };
    case 'SET_EIGHTH_VOLUME':
      return { ...state, eighthVolume: clampVolume(action.eighthVolume) };
    case 'SET_SIXTEENTH_VOLUME':
      return { ...state, sixteenthVolume: clampVolume(action.sixteenthVolume) };
    case 'SET_TRIPLET_VOLUME':
      return { ...state, tripletVolume: clampVolume(action.tripletVolume) };
    default:
      return state;
  }
}

interface MetronomeContextValue extends AppState {
  togglePlayPause: () => void;
  setTempo: (value: number) => void;
  setMeter: (value: number) => void;
  setMasterVolume: (value: number) => void;
  setAccentVolume: (value: number) => void;
  setQuarterVolume: (value: number) => void;
  setEighthVolume: (value: number) => void;
  setSixteenthVolume: (value: number) => void;
  setTripletVolume: (value: number) => void;
}

const MetronomeContext = createContext<MetronomeContextValue | null>(null);

export function MetronomeProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, getSavedState());

  // Initialize audio engine on mount with saved state values
  useEffect(() => {
    init(state);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Sync audio engine when individual state slices change
  useEffect(() => {
    play(state.isPlaying);
  }, [state.isPlaying]);

  useEffect(() => {
    setMetronomeTempo(state.tempo);
  }, [state.tempo]);

  useEffect(() => {
    setMetronomeMeter(state.meter);
  }, [state.meter]);

  useEffect(() => {
    setMetronomeMasterVolume(state.masterVolume);
  }, [state.masterVolume]);

  useEffect(() => {
    setMetronomeAccentVolume(state.accentVolume);
  }, [state.accentVolume]);

  useEffect(() => {
    setMetronomeQuarterVolume(state.quarterVolume);
  }, [state.quarterVolume]);

  useEffect(() => {
    setMetronomeEighthVolume(state.eighthVolume);
  }, [state.eighthVolume]);

  useEffect(() => {
    setMetronomeSixteenthVolume(state.sixteenthVolume);
  }, [state.sixteenthVolume]);

  useEffect(() => {
    setMetronomeTripletVolume(state.tripletVolume);
  }, [state.tripletVolume]);

  // Persist non-playback state to localStorage on every change
  useEffect(() => {
    setSavedState(state);
  }, [state]);

  const value: MetronomeContextValue = {
    ...state,
    togglePlayPause: () => dispatch({ type: 'TOGGLE_PLAY_PAUSE' }),
    setTempo: (tempo) => dispatch({ type: 'SET_TEMPO', tempo }),
    setMeter: (meter) => dispatch({ type: 'SET_METER', meter }),
    setMasterVolume: (masterVolume) => dispatch({ type: 'SET_MASTER_VOLUME', masterVolume }),
    setAccentVolume: (accentVolume) => dispatch({ type: 'SET_ACCENT_VOLUME', accentVolume }),
    setQuarterVolume: (quarterVolume) => dispatch({ type: 'SET_QUARTER_VOLUME', quarterVolume }),
    setEighthVolume: (eighthVolume) => dispatch({ type: 'SET_EIGHTH_VOLUME', eighthVolume }),
    setSixteenthVolume: (sixteenthVolume) =>
      dispatch({ type: 'SET_SIXTEENTH_VOLUME', sixteenthVolume }),
    setTripletVolume: (tripletVolume) => dispatch({ type: 'SET_TRIPLET_VOLUME', tripletVolume }),
  };

  return <MetronomeContext.Provider value={value}>{children}</MetronomeContext.Provider>;
}

export function useMetronome(): MetronomeContextValue {
  const ctx = useContext(MetronomeContext);
  if (!ctx) throw new Error('useMetronome must be used within MetronomeProvider');
  return ctx;
}

// Re-export defaultState so callers that previously imported from reducers can use this instead
export { defaultState };
