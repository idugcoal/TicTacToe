import isGameOver from './isGameOver';
import showResult from './util/showResult';
import getComputerMove from './getComputerMove';
import * as state from '../state';

export default function playGame(e) {
  if (e.target.innerText === '' && !state.gameOverFlag) {
    e.target.innerText = state.players[(state.currentTurn % 2)];
    if (isGameOver(state)) {
      return showResult(state);
    }
    state.currentTurn += 1;
    if ((state.currentTurn % 2) === 1) {
      const computerMove = getComputerMove(state);
      state.board[computerMove].innerText = state.players[(state.currentTurn % 2)];
      if (isGameOver(state)) {
        return showResult(state);
      }
      state.currentTurn += 1;
    }
  }
  return false;
}
