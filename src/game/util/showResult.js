import showWinningSquares from './showWinningSquares';

export default function showResult(state) {
  const winnerString = state.currentTurn % 2 === 1 ? 'O is the winner!' : 'This game is a draw!';
  state.winner.innerHTML = `${winnerString}`;
  state.winner.style.visibility = 'visible';
  if (state.gameOverFlag) showWinningSquares(state);
  return false;
}
