const test = require('node:test')
const assert = require('node:assert/strict')
const { getConfigFields } = require('./src/config')
const { getActionDefinitions } = require('./src/actions')
const { getFeedbackDefinitions } = require('./src/feedbacks')
const { getVariableDefinitions } = require('./src/variables')
const { getPresetDefinitions } = require('./src/presets')

test('Companion Module - Configuration Fields', () => {
	const fields = getConfigFields()
	assert(Array.isArray(fields), 'Config fields must be an array')
	assert(fields.some(f => f.id === 'host'), 'Must include host field')
	assert(fields.some(f => f.id === 'port'), 'Must include port field')
	assert(fields.some(f => f.id === 'pollInterval'), 'Must include pollInterval field')
})

test('Companion Module - Action Definitions', () => {
	const mockSelf = { sendCommand: async () => {} }
	const actions = getActionDefinitions(mockSelf)
	
	const requiredActions = [
		'next', 'prev', 'first', 'last', 'goto',
		'blackout', 'whiteout',
		'timer_start', 'timer_pause', 'timer_reset',
		'show_banner', 'hide_banner', 'send_message',
	]
	for (const act of requiredActions) {
		assert(actions[act], `Action ${act} must be defined`)
		assert(typeof actions[act].name === 'string', `Action ${act} must have a name`)
		assert(typeof actions[act].callback === 'function', `Action ${act} must have a callback`)
	}
})

test('Companion Module - Feedback Definitions', () => {
	const mockSelf = { presentationState: { blackout: true, whiteout: false, currentPage: 2 } }
	const feedbacks = getFeedbackDefinitions(mockSelf)
	
	assert(feedbacks.blackout_active, 'blackout_active feedback must be defined')
	assert.equal(feedbacks.blackout_active.callback(), true, 'blackout_active should return true when blackout is true')
	
	assert(feedbacks.whiteout_active, 'whiteout_active feedback must be defined')
	assert.equal(feedbacks.whiteout_active.callback(), false, 'whiteout_active should return false when whiteout is false')
	
	assert(feedbacks.on_specific_slide, 'on_specific_slide feedback must be defined')
	assert.equal(feedbacks.on_specific_slide.callback({ options: { page: 2 } }), true)
	assert.equal(feedbacks.on_specific_slide.callback({ options: { page: 5 } }), false)
})

test('Companion Module - Variable Definitions', () => {
	const variables = getVariableDefinitions()
	assert(Array.isArray(variables), 'Variables must be an array')
	const ids = variables.map(v => v.variableId)
	assert(ids.includes('current_page'), 'Must include current_page variable')
	assert(ids.includes('total_pages'), 'Must include total_pages variable')
	assert(ids.includes('slide_text'), 'Must include slide_text variable')
	assert(ids.includes('blackout'), 'Must include blackout variable')
	assert(ids.includes('whiteout'), 'Must include whiteout variable')
	assert(ids.includes('status'), 'Must include status variable')
})

test('Companion Module - Preset Definitions', () => {
	const mockSelf = {}
	const presets = getPresetDefinitions(mockSelf)
	assert(presets.next_slide, 'Preset next_slide must be defined')
	assert(presets.prev_slide, 'Preset prev_slide must be defined')
	assert(presets.slide_display, 'Preset slide_display must be defined')
	assert(presets.blackout_screen, 'Preset blackout_screen must be defined')
	assert(presets.whiteout_screen, 'Preset whiteout_screen must be defined')
	assert(presets.timer_start_btn, 'Preset timer_start_btn must be defined')
})

test('Companion Module - Manifest JSON Validation', () => {
	const manifest = require('./companion/manifest.json')
	assert.equal(manifest.id, 'sharun-pdfpresenter')
	assert.equal(manifest.runtime.type, 'node22')
	assert.equal(manifest.runtime.api, 'nodejs-ipc')
	assert.equal(manifest.runtime.entrypoint, '../src/main.js')
	assert(Array.isArray(manifest.products))
	assert(manifest.products.includes('PDF Presenter Suite'))
})
