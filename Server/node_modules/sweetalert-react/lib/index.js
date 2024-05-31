'use strict';

if (typeof window === 'undefined') {
  module.exports = function () {
    return null;
  };
} else {
  module.exports = require('./SweetAlert'); // eslint-disable-line global-require
}