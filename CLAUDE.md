# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev               # start Vite dev server
yarn build             # production Vite build → dist/
yarn preview           # preview the production build locally
yarn test              # run Vitest test suite (single run)
yarn test:watch        # Vitest in watch mode
yarn test:coverage     # run tests with coverage report
yarn lint              # ESLint (src + tests)
yarn format            # reformat with Prettier
```

Run a single test file:
```bash
yarn vitest run tests/reducer.test.ts
```

> **Node version**: the project requires Node 22. Run `nvm use` before any `yarn` command if your shell defaults to an older version.

## Architecture

A mobile-friendly metronome using **React 18 + useReducer/Context** for the UI, **Web Audio API** for sound synthesis, and a **Web Worker** for precise timing. Written in TypeScript.

### Data flow

```
User interaction
  → dispatch (src/context/MetronomeContext.tsx)
  → reducer (src/context/MetronomeContext.tsx)
  → useEffect hooks sync audio engine + localStorage
  → React re-render
```

State shape: `{ isPlaying, tempo, meter, masterVolume, accentVolume, quarterVolume, eighthVolume, sixteenthVolume, tripletVolume }`. Defaults are in `src/types.ts`. State is loaded from `localStorage` on startup via `src/utils/localstorage.ts`; `isPlaying` is intentionally excluded from persistence.

### Context (`src/context/MetronomeContext.tsx`)

`MetronomeProvider` owns the `useReducer` state and exposes it via React context. Side effects are handled by `useEffect` hooks inside the provider:
- Audio engine sync — each relevant state slice has its own `useEffect` that calls the corresponding setter in `src/utils/metronome.ts`
- `localStorage` persistence — a single `useEffect` on `state` calls `setSavedState`

Components consume state and actions via the `useMetronome()` hook.

### Audio engine (`src/utils/metronome.ts`)

Uses a "twelvelet" subdivision model — each beat is divided into 12 sub-units, which allows quarter notes (every 12), eighth notes (every 6), triplets (every 4), and sixteenth notes (every 3) to share a single scheduler loop. The Web Worker (`src/utils/worker.ts`) fires `'tick'` messages at the lookahead interval (25 ms); the scheduler looks 100 ms ahead and queues `OscillatorNode` / `GainNode` pairs via the Web Audio API.

### Component entry point

`src/index.tsx` → `<MetronomeProvider>` → `<App />`

### Testing

Vitest + React Testing Library. `tests/setup.ts` (registered in `vite.config.ts`) imports `@testing-library/jest-dom` and polyfills `localStorage`. Tests live in `tests/`.

Any test file that imports `MetronomeContext` (directly or transitively) must mock the metronome module to prevent Web Worker instantiation in jsdom:

```ts
vi.mock('../src/utils/metronome', () => ({
  init: vi.fn(),
  play: vi.fn(),
  setTempo: vi.fn(),
  setMeter: vi.fn(),
  setMasterVolume: vi.fn(),
  setAccentVolume: vi.fn(),
  setQuarterVolume: vi.fn(),
  setEighthVolume: vi.fn(),
  setSixteenthVolume: vi.fn(),
  setTripletVolume: vi.fn(),
}));
```
