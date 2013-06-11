module.exports = {
	amqp: {
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
	}
};