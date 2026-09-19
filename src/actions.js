function getActionDefinitions(self) {
	return {
		next: {
			name: 'Next Slide',
			description: 'Advance to the next slide with smooth dissolve transition',
			options: [],
			callback: async () => {
				await self.sendCommand('/api/next')
			},
		},
		prev: {
			name: 'Previous Slide',
			description: 'Return to the previous slide',
			options: [],
			callback: async () => {
				await self.sendCommand('/api/prev')
			},
		},
		first: {
			name: 'First Slide',
			description: 'Jump immediately to Slide 1',
			options: [],
			callback: async () => {
				await self.sendCommand('/api/first')
			},
		},
		last: {
			name: 'Last Slide',
			description: 'Jump immediately to the final slide',
			options: [],
			callback: async () => {
				await self.sendCommand('/api/last')
			},
		},
		goto: {
			name: 'Go to Specific Slide',
			description: 'Jump directly to a slide number',
			options: [
				{
					type: 'number',
					id: 'page',
					label: 'Slide Number',
					min: 1,
					max: 1000,
					default: 1,
					required: true,
				},
			],
			callback: async (action) => {
				const page = action.options.page || 1
				await self.sendCommand(`/api/goto?page=${page}`)
			},
		},
		blackout: {
			name: 'Toggle Blackout Screen',
			description: 'Toggles black screen on the audience display',
			options: [],
			callback: async () => {
				await self.sendCommand('/api/blackout')
			},
		},
		whiteout: {
			name: 'Toggle Whiteout Screen',
			description: 'Toggles white screen on the audience display',
			options: [],
			callback: async () => {
				await self.sendCommand('/api/whiteout')
			},
		},
		timer_start: {
			name: 'Start / Resume Timer',
			description: 'Start or resume presentation stopwatch timer',
			options: [],
			callback: async () => {
				await self.sendCommand('/api/timer/start')
			},
		},
		timer_pause: {
			name: 'Pause Timer',
			description: 'Pause active presentation timer',
			options: [],
			callback: async () => {
				await self.sendCommand('/api/timer/pause')
			},
		},
		timer_reset: {
			name: 'Reset Timer',
			description: 'Reset presentation timer to zero or starting duration',
			options: [],
			callback: async () => {
				await self.sendCommand('/api/timer/reset')
			},
		},
		show_banner: {
			name: 'Show Audience Ticker Banner',
			description: 'Display lower-third ticker announcement on audience display',
			options: [
				{
					type: 'textinput',
					id: 'message',
					label: 'Banner Message',
					required: true,
				},
				{
					type: 'number',
					id: 'duration',
					label: 'Duration in seconds (0 for persistent)',
					min: 0,
					max: 3600,
					default: 15,
				},
			],
			callback: async (action) => {
				await self.sendCommand('/api/banner', {
					message: action.options.message || '',
					duration: Number(action.options.duration) || 0,
				})
			},
		},
		hide_banner: {
			name: 'Hide Audience Ticker Banner',
			description: 'Dismiss any active ticker announcement banner',
			options: [],
			callback: async () => {
				await self.sendCommand('/api/banner', null, 'DELETE')
			},
		},
		send_message: {
			name: 'Send Live Stage Alert Message',
			description: 'Route a live banner/cue message to presenter, stage monitor, or audience',
			options: [
				{
					type: 'textinput',
					id: 'message',
					label: 'Alert Message',
					required: true,
				},
				{
					type: 'dropdown',
					id: 'target',
					label: 'Target Screen',
					default: 'presenter',
					choices: [
						{ id: 'presenter', label: 'Presenter Cockpit' },
						{ id: 'stage', label: 'Stage Confidence Monitor' },
						{ id: 'audience', label: 'Audience Lower-Third' },
						{ id: 'all', label: 'All Displays' },
					],
				},
			],
			callback: async (action) => {
				await self.sendCommand('/api/message', {
					message: action.options.message || '',
					target: action.options.target || 'presenter',
				})
			},
		},
	}
}

module.exports = function (self) {
	self.setActionDefinitions(getActionDefinitions(self))
}

module.exports.getActionDefinitions = getActionDefinitions
