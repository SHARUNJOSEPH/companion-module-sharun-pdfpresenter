module.exports = {
  getActionDefinitions(self) {
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
    }
  },
}