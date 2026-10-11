const { AsyncLocalStorage } = require('node:async_hooks');

if (AsyncLocalStorage) {
  if (!AsyncLocalStorage.snapshot) {
    AsyncLocalStorage.snapshot = function() {
      return function(fn, ...args) {
        return fn(...args);
      };
    };
  }
  if (!AsyncLocalStorage.bind) {
    AsyncLocalStorage.bind = function(fn) {
      return fn;
    };
  }
}

if (typeof globalThis !== 'undefined') {
  if (globalThis.AsyncLocalStorage) {
    if (!globalThis.AsyncLocalStorage.snapshot) {
      globalThis.AsyncLocalStorage.snapshot = AsyncLocalStorage.snapshot;
    }
    if (!globalThis.AsyncLocalStorage.bind) {
      globalThis.AsyncLocalStorage.bind = AsyncLocalStorage.bind;
    }
  } else {
    globalThis.AsyncLocalStorage = AsyncLocalStorage;
  }
}
