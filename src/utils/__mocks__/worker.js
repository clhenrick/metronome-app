const self = jest.genMockFromModule('../worker');

self.postMessage = jest.fn();
self.onmessage = jest.fn();

module.exports = self;
