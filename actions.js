
export const mark = (position) => ({
  type: 'MARK',
  payload: {position}
})
export const reset = () => ({
  type: 'RESET'
})