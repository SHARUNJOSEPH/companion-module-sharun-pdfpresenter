const { combineRgb } = require('@companion-module/base')

module.exports = {
  getFeedbackDefinitions(self) {
    return {
      blackout_active: {
        type: 'boolean',
        name: 'Blackout Screen Active',
        description: 'Changes button appearance when blackout screen is currently active',
        defaultStyle: {
          bgcolor: combineRgb(220, 38, 38), // Red
          color: combineRgb(255, 255, 255),
        },
        options: [],
        callback: () => {
          return self.presentationState.blackout === true
        },
      },
      whiteout_active: {
        type: 'boolean',
        name: 'Whiteout Screen Active',
        description: 'Changes button appearance when whiteout screen is currently active',
        defaultStyle: {
          bgcolor: combineRgb(255, 255, 255), // White
          color: combineRgb(0, 0, 0),
        },
        options: [],
        callback: () => {
          return self.presentationState.whiteout === true
        },
      },
      on_specific_slide: {
        type: 'boolean',
        name: 'Current Slide Equals',
        description: 'Changes button appearance when a specific slide number is currently shown',
        defaultStyle: {
          bgcolor: combineRgb(37, 99, 235), // Blue
          color: combineRgb(255, 255, 255),
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
          return Number(self.presentationState.currentPage) === Number(feedback.options.page)
        },
      },
    }
  },
}