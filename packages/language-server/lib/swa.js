const SWA_NOOP = {
  /* eslint-disable no-unused-vars -- consistent signatures in NOOP implementation
      methods even if they are empty placeholders */
  track(eventType, custom_events) {},
  /* eslint-enable no-unused-vars -- see matching disable comment above */
};

Object.freeze(SWA_NOOP);

let SWA_IMPL = SWA_NOOP;

function setGlobalSWA(newSWA) {
  SWA_IMPL = newSWA;
}

function getSWA() {
  return SWA_IMPL;
}

module.exports = {
  setGlobalSWA,
  getSWA,
};
