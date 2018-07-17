import {
  playGame,
  resetGame,
} from './game';
import * as state from './state';

function main() {
  state.winner.addEventListener('click', (e) => {
    e.target.click = resetGame(state);
  });
  state.board.forEach((square) => {
    square.addEventListener('click', (e) => {
      playGame(e);
    });
  });
}

main();
