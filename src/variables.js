function getVariableDefinitions() {
	return [
		{ variableId: 'current_page', name: 'Current Active Slide Number' },
		{ variableId: 'total_pages', name: 'Total Presentation Slides' },
		{ variableId: 'slide_text', name: 'Formatted Slide Display (e.g. 4 / 28)' },
		{ variableId: 'blackout', name: 'Audience Screen Blackout Active (true/false)' },
		{ variableId: 'whiteout', name: 'Audience Screen Whiteout Active (true/false)' },
		{ variableId: 'status', name: 'Connection Status (Connected/Disconnected)' },
	]
}

module.exports = function (self) {
	self.setVariableDefinitions(getVariableDefinitions())
}

module.exports.getVariableDefinitions = getVariableDefinitions
