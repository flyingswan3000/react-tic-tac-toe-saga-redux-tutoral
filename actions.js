
export const mark = (position) => ({
  type: 'MARK',
  payload: {position}
})
export const reset = () => ({
  type: 'RESET'
})

export const setMark = (position, isX) => ({
  type: 'SET_MARK',
  payload: {position, isX}
})

export const setXIsNext = (xIsNext) => ({
  type: 'SET_X_IS_NEXT',
  payload: {xIsNext}
})

