import highlightWinner from './highlightWinner';
import resetGame from '../resetGame';

export default function showWinner(state) {
  const winnerString = state.currentTurn % 2 === 1 ? 'O is the winner!' : 'This game is a draw!';
  state.winner.innerHTML = `${winnerString}`;
  state.winner.style.visibility = 'visible';
  state.winner.addEventListener('click', (e) => {
    e.target.click = resetGame(state);
  });
  if (state.gameOverFlag) highlightWinner(state);
}
