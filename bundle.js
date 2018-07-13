
let currentTurn = 0;
const players = ['X', 'O'];
const board = [...document.querySelectorAll('div.square')];
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

function isGameOver() {
  for (let i = 0; i < 8; i += 1) {
    const win = wins[i];
    if (board[win[0]].innerText === players[currentTurn % 2]
        && board[win[1]].innerText === players[currentTurn % 2]
        && board[win[2]].innerText === players[currentTurn % 2]) {
      console.log(players[currentTurn % 2], 'wins');
      return true;
    }
  }

  return false;
}

function selectComputerMove() {
  for (let i = 0; i < 8; i += 1) {
    const win = wins[i];
    console.log('1:', win[0], board[win[0]].innerText, '2:', win[1], board[win[1]].innerText, '3:', win[2], board[win[2]].innerText);
    if (board[win[0]].innerText === 'O' && board[win[1]].innerText === 'O' && board[win[2]].innerText === '') {
      board[win[2]].innerText = 'O';
      console.log('winner: ', win[2]);
      break;
    } else if (board[win[0]].innerText === 'O' && board[win[2]].innerText === 'O' && board[win[1]].innerText === '') {
      board[win[1]].innerText = 'O';
      console.log('2');
      break;
    } else if (board[win[1]].innerText === 'O' && board[win[2]].innerText === 'O' && board[win[0]].innerText === '') {
      board[win[0]].innerText = 'O';
      console.log('3');
      break;
    } else if (board[win[0]].innerText === 'X' && board[win[1]].innerText === 'X' && board[win[2]].innerText === '') {
      board[win[2]].innerText = 'O';
      console.log('4');
      break;
    } else if (board[win[0]].innerText === 'X' && board[win[2]].innerText === 'X' && board[win[1]].innerText === '') {
      board[win[1]].innerText = 'O';
      console.log('5');
      break;
    } else if (board[win[1]].innerText === 'X' && board[win[2]].innerText === 'X' && board[win[0]].innerText === '') {
      board[win[0]].innerText = 'O';
      console.log('6');
      break;
    }
  }
  console.log('after IFs', currentTurn);
  if (currentTurn === 1) {
    if (board[4].innerText === '') {
      board[4].innerText = 'O';
    } else {
      board[8].innerText = 'O';
    }
  }

  currentTurn += 1;
  isGameOver();
}

function main() {
  board.forEach(square => {
    square.addEventListener('click', e => {
      if(e.target.innerText === '') {
        e.target.innerText = players[currentTurn % 2]
        isGameOver()
        currentTurn++
        if(currentTurn % 2 === 1) {
          selectComputerMove()
        }
      }
    })
  })
}

main();