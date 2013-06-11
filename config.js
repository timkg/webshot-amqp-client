module.exports = {
	amqp: {
		credentials: {
			host: "localhost",
			port: 5672,
			username: "guest",
			password: "guest",
			vhost: "/"
		},
		requestProducer: {
			exchangeName: "screenshot.exchange",
			queueName: "screenshot.request",
			routingKey: "request"
		},
		responseConsumer: {
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