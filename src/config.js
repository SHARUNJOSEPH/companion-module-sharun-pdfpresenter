module.exports = {
	getConfigFields() {
		return [
			{
				type: 'textinput',
				id: 'host',
				label: 'Target Host / IP Address',
				width: 8,
				default: '127.0.0.1',
				tooltip: 'IP address of the computer running PDF Presenter Suite (use 127.0.0.1 if on the same machine)',
			},
			{
				type: 'number',
				id: 'port',
				label: 'API Port',
				width: 4,
				min: 1024,
				max: 65535,
				default: 3000,
				required: true,
			},
			{
				type: 'number',
				id: 'pollInterval',
				label: 'Polling Interval (ms)',
				width: 6,
				min: 200,
				max: 10000,
				default: 500,
				tooltip: 'Frequency to query presentation telemetry and update button variables/feedbacks',
			},
		]
	},
}
