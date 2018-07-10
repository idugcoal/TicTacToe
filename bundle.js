let currentTurn = 0

function isGameOver(board, player) {
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  wins.forEach(win => {
    if(board[win[0]].innerText === player && board[win[1]].innerText === player && board[win[2]].innerText === player) {
      console.log('WINNNNN')
      return true
    }
  })

  return false
}

function findEmpty(board, wins) {
  return wins.filter((win, item) => {
    console.log(win, item)
  })
}

function findPairs(board) {
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let win of wins) {
  // wins.forEach((win, i) => {
    //look for any empty pairs and place for win
    if(board[win[0]].innerText === 'O' && board[win[1]].innerText === 'O' && board[win[2]].innerText === '') {
      console.log('Marked Spot: ', win[2])
      board[win[2]].innerText = 'O'
      currentTurn++
      break
    }
    else if(board[win[0]].innerText === 'O' && board[win[2]].innerText === 'O' && board[win[1]].innerText === '') {
      console.log('Marked Spot: ', win[1])
      board[win[1]].innerText = 'O'
      currentTurn++
      break
    }
    else if(board[win[1]].innerText === 'O' && board[win[2]].innerText === 'O' && board[win[0]].innerText === '') {
      console.log('Marked Spot: ', win[0])
      board[win[0]].innerText = 'O'
      currentTurn++
      break
    }
    //look for any other empty player pairs and place for block
    else if(board[win[0]].innerText === 'X' && board[win[1]].innerText=== 'X' && board[win[2]].innerText === '') {
      console.log('Marked Spot: ', win[2])
      board[win[2]].innerText = 'O'
      currentTurn++
      break
    }
    else if(board[win[0]].innerText === 'X' && board[win[2]].innerText === 'X' && board[win[1]].innerText === '') {
      console.log('Marked Spot: ', win[1])
      board[win[1]].innerText = 'O'
      currentTurn++
      break
    }
    else if(board[win[1]].innerText === 'X' && board[win[2]].innerText === 'X' && board[win[0]].innerText === '') {
      console.log('Marked Spot: ', win[0])
      board[win[0]].innerText = 'O'
      currentTurn++
      break
    }
    else {
      console.log('ending else:')
      if(board[4].innerText === '') {
        console.log('if')
        board[4].innerText = 'O'
        currentTurn++
        break
      } else {
        console.log('else')
        board[8].innerText = 'O'
        currentTurn++
        break
      }
    }
  // })
}
  //look for an emtpy row/column/diagonal

  //otherwise, place randomly

}

function selectComputerMove(board) {
  findPairs(board)
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
        console.log(currentTurn)
        if(currentTurn % 2 === 1) {
          console.log('here')
          selectComputerMove(board)
        }
      }
    })
  })
}

main()