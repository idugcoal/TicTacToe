export default function showWinningSquares({ wins, board, winningCondition }) {
  const winningSquares = wins[winningCondition];
  winningSquares.forEach((square) => {
    board[square].className += ` win-${winningCondition}`;
  });
}
