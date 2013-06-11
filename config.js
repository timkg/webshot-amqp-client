module.exports = {
	amqp: {
		credentials: {
			host: "localhost",
			port: 5672,
			username: "guest",
			password: "guest",
			vhost: "/"
		},
		producer: {
			exchangeName: "screenshot.exchange",
			queueName: "screenshot.request",
			routingKey: "request"
		},
		consumer: {
			exchangeName: "screenshot.exchange",
			queueName: "screenshot.response",
			routingKey: "response"
		}
	},
	cloudinary: {
		cloudName: "cloudName", 
		apiKey: "apiKey",
		apiSecret: "apiSecret"
	}
};