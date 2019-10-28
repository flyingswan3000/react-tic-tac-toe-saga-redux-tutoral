import {takeEvery, put, select, call} from 'redux-saga/effects'
import {setMark, setXIsNext} from './actions'
import { calculateWinner } from './utils';
import _ from 'lodash'
const delay = x => new Promise((resolve) => _.delay(resolve, x))
function * makeMark(action) {
  
  const squares = yield select(s => s.squares)
  if (calculateWinner(squares)) return

  const {position, isX} = action.payload
  const xIsNext = yield select(s => s.xIsNext)
  for (let  i = 0 ;i <= 3 ; i++ ){
    yield call(delay, 100)
    yield put(setMark(position, null))
    yield call(delay, 100)
    yield put(setMark(position, xIsNext? 'X':'O'))
  }
  yield put(setXIsNext(!xIsNext))
}
function * main() {
  yield takeEvery('MARK', makeMark)
}

export default main