export default function isFork({ board, forks }) {
  for (let i = 0; i < 4; i += 1) {
    const fork = forks[i];
    if (board[fork[0]].innerText === 'X'
      && board[fork[1]].innerText === 'X'
      && board[fork[2]].innerText === ''
    ) {
      return true;
    }
  }
  return false;
}