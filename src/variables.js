module.exports = {
  getVariableDefinitions() {
    return [
      {
        variableId: 'current_page',
        name: 'Current Slide Number',
      },
      {
        variableId: 'total_pages',
        name: 'Total Slide Count',
      },
      {
        variableId: 'slide_text',
        name: 'Slide Progress (Current / Total)',
      },
      {
        variableId: 'blackout',
        name: 'Blackout Screen Active',
      },
      {
        variableId: 'whiteout',
        name: 'Whiteout Screen Active',
      },
      {
        variableId: 'status',
        name: 'Connection Status',
      },
    ]
  },
}