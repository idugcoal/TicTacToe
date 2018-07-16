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
let gameOverFlag = false;
let currentTurn = 0;
let winningCondition = -1;

function isGameOver() {
  if (currentTurn === 8) return true;
  for (let i = 0; i < 8; i += 1) {
    const win = wins[i];
    if (board[win[0]].innerText === players[(currentTurn % 2)]
        && board[win[1]].innerText === players[(currentTurn % 2)]
        && board[win[2]].innerText === players[(currentTurn % 2)]
    ) {
      winningCondition = i;
      gameOverFlag = true;
      return true;
    }
  }
  return false;
}

function reducedGameOver() {
  if (currentTurn === 8) return true;

  wins.reduce((result, win, i) => {
    if (result) return result;

    if (board[win[0]].innerText === players[(currentTurn % 2)]
      && board[win[1]].innerText === players[(currentTurn % 2)]
      && board[win[2]].innerText === players[(currentTurn % 2)]
    ) {
      winningCondition = i;
      return true;
    }
    return result;
  }, false);
}

function getForkBlocker() {
  for (let i = 0; i < 4; i += 1) {
    const fork = forks[i];
    console.log(fork)
    if (board[fork[0]].innerText === 'X'
      && board[fork[1]].innerText === 'X'
      && board[fork[2]].innerText === ''
    ) {
      return fork[2];
    }
  }
  return false
}

function isFork() {
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

function getEmptyBox() {
  console.log('getEmpty')
  const temp = [];
  for (let i = 0; i < 9; i += 1) {
    if (board[i].innerText === '') {
      temp.push(i);
    }
  }
  const randomIndex = Math.floor(Math.random() * temp.length);
  return temp[randomIndex];
}

function getCornerBox() {
  console.log('getCorner')
  const corners = [0, 2, 6, 8];
  const temp = [];
  for (let i = 0; i < 4; i += 1) {
    if (board[corners[i]].innerText === '') {
      temp.push(corners[i]);
    }
  }
  const randomIndex = Math.floor(Math.random() * temp.length);
  return temp[randomIndex];
}

function getSideBox() {
  console.log('getSide')
  const corners = [1, 3, 5, 7];
  const temp = [];
  for (let i = 0; i < 4; i += 1) {
    if (board[corners[i]].innerText === '') {
      temp.push(corners[i]);
    }
  }
  const randomIndex = Math.floor(Math.random() * temp.length);
  return temp[randomIndex];
}

function getComputerMove() {
  for (let i = 0; i < 8; i += 1) {
    const win = wins[i];
    if (board[win[0]].innerText === 'O' && board[win[1]].innerText === 'O' && board[win[2]].innerText === '') {
      return win[2];
    }
    if (board[win[0]].innerText === 'O' && board[win[2]].innerText === 'O' && board[win[1]].innerText === '') {
      return win[1];
    }
    if (board[win[1]].innerText === 'O' && board[win[2]].innerText === 'O' && board[win[0]].innerText === '') {
      return win[0];
    }
  }
  for (let i = 0; i < 8; i += 1) {
    const win = wins[i];
    if (board[win[0]].innerText === 'X' && board[win[1]].innerText === 'X' && board[win[2]].innerText === '') {
      return win[2];
    }
    if (board[win[0]].innerText === 'X' && board[win[2]].innerText === 'X' && board[win[1]].innerText === '') {
      return win[1];
    }
    if (board[win[1]].innerText === 'X' && board[win[2]].innerText === 'X' && board[win[0]].innerText === '') {
      return win[0];
    }
  }
  if (currentTurn === 1) {
    if (board[4].innerText === '') {
      return 4;
    }
    return getCornerBox();
  }
  if (isFork()) return getForkBlocker();
  if ((board[0].innerText === 'X' && board[8].innerText === 'X')
    || (board[2].innerText === 'X' && board[6].innerText === 'X')) {
    return getSideBox();
  }
  return getEmptyBox();
}

function toggleWinningSquares() {
  const winningSquares = wins[winningCondition];
  winningSquares.forEach((square) => {
    board[square].className += ` win-${winningCondition}`;
  });
}

function removeClass() {
  const winningSquares = document.querySelectorAll('div.square');
  for (let i = 0; i < winningSquares.length; i += 1) {
    winningSquares[i].classList.remove(`win-${winningCondition}`);
  }
}

function resetGame() {
  currentTurn = 0;
  winner.style.visibility = 'hidden';
  board.forEach((square) => {
    const temp = square;
    temp.innerText = '';
  });
  removeClass();
  winningCondition = -1;
  gameOverFlag = false;
}

function showWinner() {
  const winnerString = currentTurn % 2 === 1 ? 'O is the winner!' : 'This game is a draw!';
  winner.innerHTML = `${winnerString}`;
  winner.style.visibility = 'visible';
  winner.addEventListener('click', (e) => {
    e.target.click = resetGame();
  });
  if (currentTurn % 2 === 1) toggleWinningSquares();
}

function playGame(e) {
  if (e.target.innerText === '' && !gameOverFlag) {
    e.target.innerText = players[(currentTurn % 2)];
    if (isGameOver()) {
      return showWinner();
    }
    currentTurn += 1;
    if ((currentTurn % 2) === 1) {
      const computerMove = getComputerMove();
      board[computerMove].innerText = players[(currentTurn % 2)];
      if (isGameOver()) {
        return showWinner();
      }
      currentTurn += 1;
    }
  }
  return false;
}

function main() {
  board.forEach((square) => {
    square.addEventListener('click', (e) => {
      playGame(e);
    });
  });
}

main();
