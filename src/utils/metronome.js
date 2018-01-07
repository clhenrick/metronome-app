// code credit: @scottwhudson
// https://github.com/scottwhudson/metronome
// ported to ES6

import Worker from './worker';

let audioContext = null;
// let isPlaying = false; // Are we currently playing?
// let startTime; // The start time of the entire sequence.
let currentTwelveletNote; // What note is currently last scheduled?
let tempo = 120.0; // tempo (in beats per minute)
let meter = 4;
let masterVolume = 0.5;
let accentVolume = 1;
let quarterVolume = 0.75;
let eighthVolume = 0;
let sixteenthVolume = 0;
let tripletVolume = 0;

// How frequently to call scheduling function (in milliseconds)
const lookahead = 25.0;

// How far ahead to schedule audio (sec) This is calculated from lookahead, and
// overlaps with next interval (in case the timer is late)
const scheduleAheadTime = 0.1;

// when the next note is due.
let nextNoteTime = 0.0;

// length of "beep" (in seconds)
const noteLength = 0.05;

// the notes that have been put into the web audio,
// and may or may not have played yet. {note, time}
const notesInQueue = [];

let timerWorker = null; // The Web Worker used to fire timer messages

export function setTempo(_) {
  tempo = _;
}

export function setMeter(_) {
  meter = _;
}

export function setMasterVolume(_) {
  masterVolume = _;
}

export function setAccentVolume(_) {
  accentVolume = _;
}

export function setQuarterVolume(_) {
  quarterVolume = _;
}

export function setEigthVolume(_) {
  eighthVolume = _;
}

export function setSixteenthVolume(_) {
  sixteenthVolume = _;
}

export function setTripletVolume(_) {
  tripletVolume = _;
}

function maxBeats() {
  const beats = meter * 12;
  return beats;
}

function nextTwelvelet() {
  const secondsPerBeat = 60.0 / tempo;
  nextNoteTime += 0.08333 * secondsPerBeat; // Add beat length to last beat time
  currentTwelveletNote += 1; // Advance the beat number, wrap to zero

  if (currentTwelveletNote === maxBeats()) {
    currentTwelveletNote = 0;
  }
}

function calcVolume(beatVolume) {
  return beatVolume * masterVolume;
}

function scheduleNote(beatNumber, time) {
  // push the note on the queue, even if we're not playing.
  notesInQueue.push({ note: beatNumber, time });

  // create oscillator & gainNode & connect them to the context destination
  const osc = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  osc.connect(gainNode);
  gainNode.connect(audioContext.destination);

  if (beatNumber % maxBeats() === 0) {
    if (accentVolume > 0.25) {
      osc.frequency.value = 880.0;
      gainNode.gain.value = calcVolume(accentVolume);
    } else {
      osc.frequency.value = 440.0;
      gainNode.gain.value = calcVolume(quarterVolume);
    }
  } else if (beatNumber % 12 === 0) {
    // quarter notes = medium pitch
    osc.frequency.value = 440.0;
    gainNode.gain.value = calcVolume(quarterVolume);
  } else if (beatNumber % 6 === 0) {
    osc.frequency.value = 440.0;
    gainNode.gain.value = calcVolume(eighthVolume);
  } else if (beatNumber % 4 === 0) {
    osc.frequency.value = 300.0;
    gainNode.gain.value = calcVolume(tripletVolume);
  } else if (beatNumber % 3 === 0) {
    // other 16th notes = low pitch
    osc.frequency.value = 220.0;
    gainNode.gain.value = calcVolume(sixteenthVolume);
  } else {
    gainNode.gain.value = 0; // keep the remaining twelvelet notes inaudible
  }

  osc.start(time);
  osc.stop(time + noteLength);
}

function scheduler() {
  while (nextNoteTime < audioContext.currentTime + scheduleAheadTime) {
    scheduleNote(currentTwelveletNote, nextNoteTime);
    nextTwelvelet();
  }
}

export function play(isPlaying) {
  if (isPlaying) {
    currentTwelveletNote = 0;
    nextNoteTime = audioContext.currentTime;
    timerWorker.postMessage('start');
    // document.getElementById('play-icon').innerHTML = 'pause';
  } else {
    timerWorker.postMessage('stop');
    // document.getElementById('play-icon').innerHTML = 'play_arrow';
  }
}

export function init() {
  audioContext = null;
  timerWorker = new Worker();

  // hack so that AudioContext works on iOS
  // code credit: https://gist.github.com/laziel/7aefabe99ee57b16081c
  let usingWebAudio = true;

  try {
    if (typeof AudioContext !== 'undefined') {
      audioContext = new AudioContext();
    } else if (typeof webkitAudioContext !== 'undefined') {
      audioContext = new webkitAudioContext(); // eslint-disable-line
    } else {
      usingWebAudio = false;
    }
  } catch (e) {
    usingWebAudio = false;
  }

  // context state at this time is `undefined` in iOS8 Safari
  if (usingWebAudio && audioContext.state === 'suspended') {
    alert('webaudio suspended'); // eslint-disable-line

    const resume = () => {
      audioContext.resume();

      alert('webaudio resuming'); // eslint-disable-line

      setTimeout(() => {
        if (audioContext.state === 'running') {
          document.body.removeEventListener('touchend', resume, false);
        }
      }, 0);
    };

    document.body.addEventListener('touchend', resume, false);
  }

  timerWorker.onmessage = e => {
    if (e.data === 'tick') {
      scheduler();
    } else {
      // eslint-disable-next-line
      console.log(`message: ${e.data}`);
    }
  };

  timerWorker.postMessage({ interval: lookahead });
}
