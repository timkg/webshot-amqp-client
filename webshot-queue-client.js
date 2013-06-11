var cloudinary = require('cloudinary')
  , request = require('request')
  , amqp = require('amqp')
  , config = require('./config');
  

exports.imageExists = function(publicId, format, callback) {
	if (typeof format === 'function') {
		callback = format;
		format = 'png';
	}
	cloudinary.config('cloud_name', config.cloudinary.cloudName);
	cloudinary.config('api_key', config.cloudinary.apiKey);
	cloudinary.config('api_secret', config.cloudinary.apiSecret);

	var url = cloudinary.url(publicId, {format: format});
	
	request.head(url, function(error, res) {
		if (error) { console.log(error); }
		var exists;
		switch (res.statusCode) {
			case 200:
				exists = true;
				break;
			default:
				exists = false;
				break;
		}
		callback(exists)
	});
};