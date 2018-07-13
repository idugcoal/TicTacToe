/*eslint-disable */
let currentTurn = 0;

function isGameOver(board, player) {
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

  wins.forEach((win) => {
    if (board[win[0]].innerText === player
        && board[win[1]].innerText === player
        && board[win[2]].innerText === player) {
      console.log(player, 'wins');
      return true;
    }
  });


  return false;
}

function findPairs(board) {
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

  for (const win of wins) {
    //look for any empty pairs and place for win
    console.log(board, win[0], win[1], win[2])
    if (board[win[0]].innerText === 'O' && board[win[1]].innerText === 'O' && board[win[2]].innerText === '') {
      board[win[2]].innerText = 'O';
      currentTurn++
      break;
    }
    else if (board[win[0]].innerText === 'O' && board[win[2]].innerText === 'O' && board[win[1]].innerText === '') {
      board[win[1]].innerText = 'O'
      currentTurn++
      break
    }
    else if (board[win[1]].innerText === 'O' && board[win[2]].innerText === 'O' && board[win[0]].innerText === '') {
      board[win[0]].innerText = 'O'
      currentTurn++
      break
    }
    //look for any other empty player pairs and place for block
    else {
      if(board[4].innerText === '') {
        console.log('center')
        board[4].innerText = 'O'
        currentTurn++
        break
      } else {
        console.log('corner')
        board[8].innerText = 'O'
        currentTurn++
        break
      }
    }
}
}

function selectComputerMove(board) {
  findPairs(board);
}

function main() {
  const players = ['X', 'O']

  const board = [...document.querySelectorAll("div.square")]
  board.forEach(square => {
    square.addEventListener('click', e => {
      if(e.target.innerText === '') {
        e.target.innerText = players[currentTurn % 2]
        isGameOver(board, players[currentTurn % 2])
        currentTurn++
        if(currentTurn % 2 === 1) {
          selectComputerMove(board)
        }
      }
    })
  })
}

main();