var amqp = require('amqp')
  , cloudinary = require('./src/cloudinary')
  , config = require('./config')
  , consumer = require('./src/consumer')
  , producer = require('./src/producer')
  , connection;

exports.init = function(callback) {
	cloudinary.init(config.cloudinary);
	connection = amqp.createConnection(config.amqp.credentials);

	connection.on('ready', function() {
		producer.init(connection, config.amqp.producer);
		consumer.init(connection, config.amqp.consumer);
		callback();
	});

	connection.on('error', function(error) {
		console.log(error);
		process.exit(1);
	});
};

exports.requestScreenshot = function(url) {
	producer.requestScreenshot({url: url});
};

exports.onScreenshot = function(callback) {
	consumer.on('msg', function(msg) {
		if (!msg.url) {
			console.log('malformed message, no url property: ' + JSON.stringify(msg));
			callback(new Error('malformed message, no url property'));
			return;
		}
		callback(null, msg);
	});
};

exports.imageExists = function(publicId, format, callback) {
	cloudinary.imageExists(publicId, format, callback);
};