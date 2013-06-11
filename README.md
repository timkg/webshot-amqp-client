webshot-queue-client
====================

A client library to request and receive screenshots from the webshot-queue AMQP server.

Installation
============

```
npm install webshot-queue-client
```

Usage
=====

Listening for new screenshots:

```javascript
var client = require('webshot-queue-client');

// call init() and pass it a callback function
client.init(function() {

	// define what to do when a screenshot arrives on the queue
	client.onScreenshot(function(err, msg) {
		// "msg" is an object with cloudinary metadata,
		// including the public URL of the screenshot.
	});
	
});
```

Placing a screenshot request to the webshot-queue server:

```javascript
var client = require('webshot-queue-client');

// call init() and pass it a callback function
client.init(function() {

	client.requestScreenshot('http://www.github.com');
	
});
```