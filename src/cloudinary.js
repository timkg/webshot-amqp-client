var cloudinary = require('cloudinary')
  , request = require('request');

exports.init = function(config) {
	cloudinary.config('cloud_name', config.cloudName);
	cloudinary.config('api_key', config.apiKey);
	cloudinary.config('api_secret', config.apiSecret);
};

exports.imageExists = function(publicId, format, callback) {
	if (typeof format === 'function') {
		callback = format;
		format = 'png';
	}

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
		callback(exists);
	});
};