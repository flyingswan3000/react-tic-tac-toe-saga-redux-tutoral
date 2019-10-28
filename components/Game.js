import React from 'react';
import Board from './Board';
import { calculateWinner } from '../utils';
import _ from 'lodash';

class Game extends React.Component {
 
  render() {


    const status = null/* TDDO */
      ? `Winner: ${null/* TDDO */}`
      : `Next player: ${false/* TDDO */ ? 'X' : 'O'}`;

    return (
      <div className='game'>
        <div className='game-board'>
          <Board />
        </div>
        <div className='game-info'>
          <div>{status}</div>
        </div>
      </div>
    );
  }
}

export default Game;
