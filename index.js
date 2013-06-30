var EventEmitter2 = require('eventemitter2').EventEmitter2;

var e = new EventEmitter2({
  newListeners: false
});

module.exports = {
  on: function (eventName, callback) {
    e.on(eventName, callback);
  },

  publish: function (data) {
    e.emit(data.eventName, data.options);
  }
};