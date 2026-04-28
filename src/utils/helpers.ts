// helper fn to prevent double tap zoom on mobile devices
// code credit: https://stackoverflow.com/a/39778831/2193086
function preventDoubleTapZoom(e) {
  const t2 = e.timeStamp;
  const t1 = e.currentTarget.dataset.lastTouch || t2;
  const dt = t2 - t1;
  const fingers = e.touches.length;
  e.currentTarget.dataset.lastTouch = t2;

  if (!dt || dt > 500 || fingers > 1) return; // not double-tap

  e.preventDefault();
  e.target.click();
}

export default preventDoubleTapZoom;
