import React from 'react';
import Board from './Board';
import { calculateWinner } from '../utils';
import _ from 'lodash';
import { connect } from 'react-redux'
import { reset } from '../actions'

const xIsNext = step => step % 2 === 0;

class Game extends React.Component {
  
  render() {

    const status = this.props.winner
      ? `Winner: ${this.props.winner}`
      : `Next player: ${this.props.xIsNext ? 'X' : 'O'}`;

    return (
      <div className='game'>
        <div className='game-board'>
          <Board />
        </div>
        <div className='game-info'>
          <div>{status}</div>
          <button onClick={() => (this.props.reset())}>Reset</button>
        </div>
      </div>
    );
  }
}
const selector = state => ({
  squares: state.squares,
  xIsNext: state.xIsNext,
  winner: calculateWinner(state.squares)
})
export default connect(
  selector,
  { reset }
)(Game)
