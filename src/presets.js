const { combineRgb } = require('@companion-module/base')

module.exports = {
  getPresetDefinitions(self) {
    return {
      next_slide: {
        type: 'button',
        category: 'Presentation Controls',
        name: 'Next Slide',
        style: {
          text: 'NEXT\nSLIDE',
          size: '18',
          color: combineRgb(255, 255, 255),
          bgcolor: combineRgb(16, 185, 129), // Green
        },
        steps: [
          {
            down: [
              {
                actionId: 'next',
                options: {},
              },
            ],
            up: [],
          },
        ],
        feedbacks: [],
      },
      prev_slide: {
        type: 'button',
        category: 'Presentation Controls',
        name: 'Previous Slide',
        style: {
          text: 'PREV\nSLIDE',
          size: '18',
          color: combineRgb(255, 255, 255),
          bgcolor: combineRgb(37, 99, 235), // Blue
        },
        steps: [
          {
            down: [
              {
                actionId: 'prev',
                options: {},
              },
            ],
            up: [],
          },
        ],
        feedbacks: [],
      },
      slide_display: {
        type: 'button',
        category: 'Presentation Controls',
        name: 'Slide Counter Display',
        style: {
          text: 'SLIDE\n$(sharun-pdfpresenter:slide_text)',
          size: '14',
          color: combineRgb(56, 189, 248),
          bgcolor: combineRgb(15, 23, 42),
        },
        steps: [
          {
            down: [],
            up: [],
          },
        ],
        feedbacks: [],
      },
      blackout_screen: {
        type: 'button',
        category: 'Stage Curtains',
        name: 'Toggle Blackout Screen',
        style: {
          text: 'BLACK\nSCREEN',
          size: '14',
          color: combineRgb(255, 255, 255),
          bgcolor: combineRgb(31, 41, 55),
        },
        steps: [
          {
            down: [
              {
                actionId: 'blackout',
                options: {},
              },
            ],
            up: [],
          },
        ],
        feedbacks: [
          {
            feedbackId: 'blackout_active',
            options: {},
            style: {
              bgcolor: combineRgb(220, 38, 38), // Turn Red when active
              color: combineRgb(255, 255, 255),
            },
          },
        ],
      },
      whiteout_screen: {
        type: 'button',
        category: 'Stage Curtains',
        name: 'Toggle Whiteout Screen',
        style: {
          text: 'WHITE\nSCREEN',
          size: '14',
          color: combineRgb(255, 255, 255),
          bgcolor: combineRgb(75, 85, 99),
        },
        steps: [
          {
            down: [
              {
                actionId: 'whiteout',
                options: {},
              },
            ],
            up: [],
          },
        ],
        feedbacks: [
          {
            feedbackId: 'whiteout_active',
            options: {},
            style: {
              bgcolor: combineRgb(255, 255, 255),
              color: combineRgb(0, 0, 0),
            },
          },
        ],
      },
      first_slide: {
        type: 'button',
        category: 'Presentation Controls',
        name: 'First Slide',
        style: {
          text: '⏮ FIRST',
          size: '14',
          color: combineRgb(255, 255, 255),
          bgcolor: combineRgb(51, 65, 85),
        },
        steps: [
          {
            down: [
              {
                actionId: 'first',
                options: {},
              },
            ],
            up: [],
          },
        ],
        feedbacks: [],
      },
      last_slide: {
        type: 'button',
        category: 'Presentation Controls',
        name: 'Last Slide',
        style: {
          text: '⏭ LAST',
          size: '14',
          color: combineRgb(255, 255, 255),
          bgcolor: combineRgb(51, 65, 85),
        },
        steps: [
          {
            down: [
              {
                actionId: 'last',
                options: {},
              },
            ],
            up: [],
          },
        ],
        feedbacks: [],
      },
      timer_start_btn: {
        type: 'button',
        category: 'Timers',
        name: 'Start / Resume Timer',
        style: {
          text: '▶ START\nTIMER',
          size: '14',
          color: combineRgb(255, 255, 255),
          bgcolor: combineRgb(5, 150, 105),
        },
        steps: [
          {
            down: [
              {
                actionId: 'timer_start',
                options: {},
              },
            ],
            up: [],
          },
        ],
        feedbacks: [],
      },
      timer_pause_btn: {
        type: 'button',
        category: 'Timers',
        name: 'Pause Timer',
        style: {
          text: '⏸ PAUSE\nTIMER',
          size: '14',
          color: combineRgb(255, 255, 255),
          bgcolor: combineRgb(217, 119, 6),
        },
        steps: [
          {
            down: [
              {
                actionId: 'timer_pause',
                options: {},
              },
            ],
            up: [],
          },
        ],
        feedbacks: [],
      },
    }
  },
}