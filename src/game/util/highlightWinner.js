export default function highlightWinner({ wins, board, winningCondition }) {
  const winningSquares = wins[winningCondition];
  winningSquares.forEach((square) => {
    board[square].className += ` win-${winningCondition}`;
  });
}
