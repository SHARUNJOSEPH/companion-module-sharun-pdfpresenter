function getFeedbackDefinitions(self) {
	return {
		blackout_active: {
			name: 'Blackout Screen Active',
			type: 'boolean',
			label: 'Blackout Active',
			defaultStyle: {
				bgcolor: 0xdc2626,
				color: 0xffffff,
			},
			options: [],
			callback: () => Boolean(self.presentationState && self.presentationState.blackout),
		},
		whiteout_active: {
			name: 'Whiteout Screen Active',
			type: 'boolean',
			label: 'Whiteout Active',
			defaultStyle: {
				bgcolor: 0xffffff,
				color: 0x000000,
			},
			options: [],
			callback: () => Boolean(self.presentationState && self.presentationState.whiteout),
		},
		on_specific_slide: {
			name: 'On Specific Slide Number',
			type: 'boolean',
			label: 'On Slide',
			defaultStyle: {
				bgcolor: 0x00b4d8,
				color: 0xffffff,
			},
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
			callback: (feedback) => {
				const target = Number(feedback.options.page) || 1
				return Boolean(self.presentationState && self.presentationState.currentPage === target)
			},
		},
	}
}

module.exports = function (self) {
	self.setFeedbackDefinitions(getFeedbackDefinitions(self))
}

module.exports.getFeedbackDefinitions = getFeedbackDefinitions
