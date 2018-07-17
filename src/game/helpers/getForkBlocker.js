export default function getForkBlocker({ forks, board }) {
  for (let i = 0; i < 4; i += 1) {
    const fork = forks[i];
    if (board[fork[0]].innerText === 'X'
      && board[fork[1]].innerText === 'X'
      && board[fork[2]].innerText === ''
    ) {
      return fork[2];
    }
  }
  return false;
}