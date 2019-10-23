import React from 'react';
import Board from './Board';
import { calculateWinner } from '../utils';
import _ from 'lodash';

const xIsNext = step => step % 2 === 0;

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = [...current.squares];
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext(this.state.stepNumber) ? 'X' : 'O';
    this.setState({
      history: [...history, { squares }],
      stepNumber: history.length
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? 'Go to #' + move : 'Go to start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    const status = winner
      ? `Winner: ${winner}`
      : `Next player: ${xIsNext(this.state.stepNumber) ? 'X' : 'O'}`;

    return (
      <div className='game'>
        <div className='game-board'>
          <Board squares={current.squares} onClick={i => this.handleClick(i)} />
        </div>
        <div className='game-info'>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
