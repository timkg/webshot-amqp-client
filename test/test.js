var client = require('../webshot-queue-client');

client.imageExists('47e7f3cf-5ef8-4706-84e0-d6fe5184ebee', function(res) {
	console.log('should exist ' + res);
});

client.imageExists('47e7f3cf-5ef8-4706-84e0-d6fe5184ebee', 'png', function(res) {
	console.log('should exist ' + res);
});

client.imageExists('47e7f3cf-5ef8-4706-84e0-DOESNOTEXIST', function(res) {
	console.log('should NOT exist ' + res);
});

client.imageExists('47e7f3cf-5ef8-4706-84e0-DOESNOTEXIST', 'png', function(res) {
	console.log('should NOT exist ' + res);
});