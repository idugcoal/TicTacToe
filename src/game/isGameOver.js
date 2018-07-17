export default function isGameOver(state) {
  if (state.currentTurn === 8) return true;
  return state.wins.reduce((result, win, i) => {
    if (result) return result;

    if (state.board[win[0]].innerText === state.players[(state.currentTurn % 2)]
      && state.board[win[1]].innerText === state.players[(state.currentTurn % 2)]
      && state.board[win[2]].innerText === state.players[(state.currentTurn % 2)]
    ) {
      state.winningCondition = i;
      state.gameOverFlag = true;
      return true;
    }
    return result;
  }, false);
}
