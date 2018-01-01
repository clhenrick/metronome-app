let timerID = null;
let interval = 100;

onmessage = e => {
  if (e.data === 'start') {
    // eslint-disable-next-line
    console.log('starting');
    timerID = setInterval(() => {
      postMessage('tick');
    }, interval);
  } else if (e.data.interval) {
    // eslint-disable-next-line
    console.log('setting interval');
    // eslint-disable-next-line
    interval = e.data.interval;
    // eslint-disable-next-line
    console.log('interval=' + interval);
    if (timerID) {
      clearInterval(timerID);
      timerID = setInterval(() => {
        postMessage('tick');
      }, interval);
    }
  } else if (e.data === 'stop') {
    // eslint-disable-next-line
    console.log('stopping');
    clearInterval(timerID);
    timerID = null;
  }
};

postMessage('hi there');
