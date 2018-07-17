const board = [...document.querySelectorAll('div.square')];
const winner = document.getElementById('winner');
const players = ['X', 'O'];
const wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const forks = [
  [1, 3, 0],
  [1, 5, 2],
  [3, 7, 6],
  [5, 7, 8],
];
const gameOverFlag = false;
const currentTurn = 0;
const winningCondition = -1;

export { board, winner, players, wins, forks, gameOverFlag, currentTurn, winningCondition };