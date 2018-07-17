import showWinningSquares from './showWinningSquares';

export default function showResult(state) {
  const winnerString = state.currentTurn % 2 === 1 ? 'O is the winner!' : 'Result: draw!';
  state.winner.innerHTML = `${winnerString} &nbsp <i class="fa fa-refresh"></i>`;
  state.winner.style.visibility = 'visible';
  if (state.gameOverFlag) showWinningSquares(state);
  return false;
}
