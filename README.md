webshot-amqp-client
====================

A client library to request and receive screenshots from the webshot-amqp AMQP server.

Pull-requests, issues and feedback welcome.

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

// call init() and pass it credentials/options and a callback function
client.init({
	cloudinary: {cloudName: "", apiKey: "", apiSecret: ""}
	, amqp: {host: "", port: 0, username: "", password: "", vhost: ""}
}, function() {

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
client.init({
	cloudinary: {cloudName: "", apiKey: "", apiSecret: ""}
	, amqp: {host: "", port: 0, username: "", password: "", vhost: ""}
}, function() {

	client.requestScreenshot('http://www.github.com');
	
});
```

To-do
=====
- Proper unit tests
- Easier and more configuration

License
===============

(The MIT License)

Copyright (c) 2013 Tim Theodor Koch-Grünberg

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.