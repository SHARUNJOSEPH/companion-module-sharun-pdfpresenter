const { InstanceBase, runEntrypoint, InstanceStatus } = require('@companion-module/base')
const { getConfigFields } = require('./src/config')
const { getActionDefinitions } = require('./src/actions')
const { getFeedbackDefinitions } = require('./src/feedbacks')
const { getVariableDefinitions } = require('./src/variables')
const { getPresetDefinitions } = require('./src/presets')

class PdfPresenterInstance extends InstanceBase {
  constructor(internal) {
    super(internal)
    this.pollTimer = null
    this.presentationState = {
      currentPage: 1,
      totalPages: 1,
      blackout: false,
      whiteout: false,
      status: 'Disconnected',
    }
  }

  async init(config) {
    this.config = config || {}
    this.updateStatus(InstanceStatus.Connecting)

    this.initActions()
    this.initFeedbacks()
    this.initVariables()
    this.initPresets()

    this.startPolling()
  }

  async destroy() {
    this.stopPolling()
    this.log('debug', 'PDF Presenter Suite module destroyed')
  }

  async configUpdated(config) {
    this.config = config || {}
    this.startPolling()
  }

  getConfigFields() {
    return getConfigFields()
  }

  initActions() {
    this.setActionDefinitions(getActionDefinitions(this))
  }

  initFeedbacks() {
    this.setFeedbackDefinitions(getFeedbackDefinitions(this))
  }

  initVariables() {
    this.setVariableDefinitions(getVariableDefinitions())
    this.updateVariableValues()
  }

  initPresets() {
    this.setPresetDefinitions(getPresetDefinitions(this))
  }

  updateVariableValues() {
    const s = this.presentationState
    this.setVariableValues({
      current_page: s.currentPage || 1,
      total_pages: s.totalPages || 1,
      slide_text: `${s.currentPage || 1} / ${s.totalPages || 1}`,
      blackout: Boolean(s.blackout),
      whiteout: Boolean(s.whiteout),
      status: s.status || 'Disconnected',
    })
  }

  startPolling() {
    this.stopPolling()
    const interval = Number(this.config.pollInterval) || 500
    this.pollStatus()
    this.pollTimer = setInterval(() => {
      this.pollStatus()
    }, interval)
  }

  stopPolling() {
    if (this.pollTimer) {
      clearInterval(this.pollTimer)
      this.pollTimer = null
    }
  }

  async pollStatus() {
    const host = this.config.host || '127.0.0.1'
    const port = this.config.port || 3000
    const url = `http://${host}:${port}/api/status`

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: { Accept: 'application/json' },
        signal: AbortSignal.timeout(2000),
      })

      if (response.ok) {
        const data = await response.json()
        this.updateStatus(InstanceStatus.Ok)

        const changed =
          this.presentationState.currentPage !== data.currentPage ||
          this.presentationState.totalPages !== data.totalPages ||
          this.presentationState.blackout !== data.blackout ||
          this.presentationState.whiteout !== data.whiteout

        this.presentationState = {
          currentPage: data.currentPage || 1,
          totalPages: data.totalPages || 1,
          blackout: Boolean(data.blackout),
          whiteout: Boolean(data.whiteout),
          status: 'Connected',
        }

        this.updateVariableValues()

        if (changed) {
          this.checkFeedbacks('blackout_active', 'whiteout_active', 'on_specific_slide')
        }
      } else {
        this.handleConnectionFailure(`HTTP ${response.status}`)
      }
    } catch (err) {
      this.handleConnectionFailure(err.message || 'Connection error')
    }
  }

  handleConnectionFailure(msg) {
    if (this.presentationState.status !== 'Disconnected') {
      this.presentationState.status = 'Disconnected'
      this.updateStatus(InstanceStatus.ConnectionFailure, msg)
      this.updateVariableValues()
    }
  }

  async sendCommand(endpoint) {
    const host = this.config.host || '127.0.0.1'
    const port = this.config.port || 3000
    const url = `http://${host}:${port}${endpoint}`

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: AbortSignal.timeout(2000),
      })

      if (!res.ok) {
        this.log('warn', `API command to ${endpoint} returned status ${res.status}`)
      }

      setTimeout(() => this.pollStatus(), 50)
    } catch (err) {
      this.log('error', `Failed to send command to ${endpoint}: ${err.message}`)
    }
  }
}

runEntrypoint(PdfPresenterInstance, [])