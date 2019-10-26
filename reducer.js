
import { calculateWinner } from './utils';

const initState = {
  squares: Array(9).fill(null),
  xIsNext: true
}

const actionMap = {
  'MARK': mark,
  'RESET': reset
}

const reducer = (state = initState, action) => {
  const reducer = actionMap[action.type]
  return reducer ? reducer(state, action): state
}

function mark(state, {payload}) {
  if (calculateWinner(state.squares)) return state
  const newSquares = [...state.squares]
  const currentMark = state.xIsNext ? 'X': 'O'
  newSquares[payload.position] = currentMark
  const xIsNext = !state.xIsNext
  return {...state, squares: newSquares, xIsNext}
}
function reset(state) {
  return initState
}

export default reducer