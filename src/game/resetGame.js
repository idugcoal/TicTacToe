// import removeWinner from './util';

export default function resetGame(state) {
  state.currentTurn = 0;
  state.winner.style.visibility = 'hidden';
  state.board.forEach((square) => {
    const temp = square;
    temp.innerText = '';
  });
  const winningSquares = document.querySelectorAll('div.square');
  for (let i = 0; i < winningSquares.length; i += 1) {
    winningSquares[i].classList.remove(`win-${state.winningCondition}`);
  }
  state.winningCondition = -1;
  state.gameOverFlag = false;
}
