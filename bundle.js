const board = [...document.querySelectorAll('div.square')];
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
let currentTurn = 0;

function isGameOver() {
  for (let i = 0; i < 8; i += 1) {
    const win = wins[i];
    if (board[win[0]].innerText === players[(currentTurn % 2)]
        && board[win[1]].innerText === players[(currentTurn % 2)]
        && board[win[2]].innerText === players[(currentTurn % 2)]) {
      console.log(players[(currentTurn % 2)], 'WINS!!!');
      return true;
    }
  }
  return false;
}

function getEmptyBoxes() {
  const blank = [];
  for (let i = 0; i < 8; i += 1) {
    if (board[i].innerText === '') {
      blank.push(i);
    }
  }
  return blank;
}

function selectComputerMove() {
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
    return 8;
  }
  const emptyBoxes = getEmptyBoxes();
  const randomIndex = Math.floor(Math.random() * emptyBoxes.length);
  const boardMark = emptyBoxes[randomIndex];
  return boardMark;
}


function main() {
  board.forEach((square) => {
    square.addEventListener('click', (e) => {
      if (e.target.innerText === '') {
        e.target.innerText = players[currentTurn % 2];
        isGameOver();
        currentTurn += 1;
        if (currentTurn % 2 === 1 && currentTurn < 9) {
          const computerMove = selectComputerMove();
          board[computerMove].innerText = players[currentTurn % 2];
          isGameOver();
          currentTurn += 1;
        }
      }
    });
  });
}

main();
