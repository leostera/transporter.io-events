# Events transport for Dispatcher.io

It simply takes the data object sent over the socket and emits an event using it's `eventName` attribute and passes the `options` attribute as the callbacks arguments.
