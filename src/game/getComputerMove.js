import {
  getCornerBox,
  getEmptyBox,
  getForkBlocker,
  getSideBox,
  isFork,
} from './helpers';

export default function getComputerMove(state) {
  for (let i = 0; i < 8; i += 1) {
    const win = state.wins[i];
    if (state.board[win[0]].innerText === 'O' && state.board[win[1]].innerText === 'O' && state.board[win[2]].innerText === '') {
      return win[2];
    }
    if (state.board[win[0]].innerText === 'O' && state.board[win[2]].innerText === 'O' && state.board[win[1]].innerText === '') {
      return win[1];
    }
    if (state.board[win[1]].innerText === 'O' && state.board[win[2]].innerText === 'O' && state.board[win[0]].innerText === '') {
      return win[0];
    }
  }
  for (let i = 0; i < 8; i += 1) {
    const win = state.wins[i];
    if (state.board[win[0]].innerText === 'X' && state.board[win[1]].innerText === 'X' && state.board[win[2]].innerText === '') {
      return win[2];
    }
    if (state.board[win[0]].innerText === 'X' && state.board[win[2]].innerText === 'X' && state.board[win[1]].innerText === '') {
      return win[1];
    }
    if (state.board[win[1]].innerText === 'X' && state.board[win[2]].innerText === 'X' && state.board[win[0]].innerText === '') {
      return win[0];
    }
  }
  if (state.currentTurn === 1) {
    if (state.board[4].innerText === '') {
      return 4;
    }
    return getCornerBox(state);
  }
  if (state.currentTurn === 3) {
    if ((state.board[0].innerText === 'X' && state.board[4].innerText === 'X' && state.board[8].innerText === 'O')
      || (state.board[0].innerText === 'O' && state.board[4].innerText === 'X' && state.board[8].innerText === 'X')
      || (state.board[2].innerText === 'X' && state.board[4].innerText === 'X' && state.board[6].innerText === 'O')
      || (state.board[2].innerText === 'O' && state.board[4].innerText === 'X' && state.board[6].innerText === 'X')
    ) {
      return getCornerBox(state);
    }
  }
  if (isFork(state)) return getForkBlocker(state);
  if ((state.board[0].innerText === 'X' && state.board[8].innerText === 'X')
    || (state.board[2].innerText === 'X' && state.board[6].innerText === 'X')) {
    return getSideBox(state);
  }
  return getEmptyBox(state);
}