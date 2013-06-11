webshot-amqp-client
====================

A client library to request and receive screenshots from the webshot-amqp AMQP server.

Installation
============

```
npm install webshot-amqp-client
```

Usage
=====

Listening for new screenshots:

```javascript
var client = require('webshot-amqp-client');

// call init() and pass it a callback function
client.init(function() {

	// define what to do when a screenshot arrives on the queue
	client.onScreenshot(function(err, msg) {
		// "msg" is an object with cloudinary metadata,
		// including the public URL of the screenshot.
	});
	
});
```

Placing a screenshot request to the webshot-amqp server:

```javascript
var client = require('webshot-amqp-client');

// call init() and pass it a callback function
client.init(function() {

	client.requestScreenshot('http://www.github.com');
	
});
```